<?php

namespace App\Command;

use App\Entity\Departement;
use App\Entity\StatistiquesDepartement;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'app:import:stats-departement',
    description: 'Import des statistiques département depuis un CSV'
)]
class ImportStatistiquesDepartementCommand extends Command
{
    public function __construct(private EntityManagerInterface $em)
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this->addArgument('file', InputArgument::REQUIRED, 'Chemin du fichier CSV');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $filePath = (string) $input->getArgument('file');

        if (!is_file($filePath)) {
            $output->writeln("<error>Fichier introuvable : {$filePath}</error>");
            return Command::FAILURE;
        }

        $handle = fopen($filePath, 'r');
        if (!$handle) {
            $output->writeln("<error>Impossible d’ouvrir le fichier</error>");
            return Command::FAILURE;
        }

        $header = fgetcsv($handle, 0, ',');
        if (!$header) {
            $output->writeln("<error>CSV vide ou en-têtes invalides</error>");
            fclose($handle);
            return Command::FAILURE;
        }

        $header = array_map(function ($h) {
            $h = (string) $h;
            $h = preg_replace('/^\xEF\xBB\xBF/', '', $h);
            return trim($h);
        }, $header);

        $depRepo = $this->em->getRepository(Departement::class);
        $statsRepo = $this->em->getRepository(StatistiquesDepartement::class);

        $imported = 0;
        $skippedMissingDept = 0;
        $skippedDuplicates = 0;

        $batchSize = 200;

        while (($row = fgetcsv($handle, 0, ',')) !== false) {
            if (count($row) < count($header)) {
                $row = array_pad($row, count($header), null);
            }

            $data = array_combine($header, $row);
            if (!$data) {
                continue;
            }

            $annee = $this->int($data['année_publication'] ?? null);
            $codeRaw = (string) ($data['code_departement'] ?? '');

            if (!$annee || $codeRaw === '') {
                continue;
            }

            $codeDept = $this->formatCodeDepartement($codeRaw);

            $departement = $depRepo->findOneBy(['codeDepartement' => $codeDept]);
            if (!$departement) {
                $skippedMissingDept++;
                continue;
            }

            $existing = $statsRepo->findOneBy([
                'departement' => $departement,
                'annee' => $annee,
            ]);

            if ($existing) {
                $skippedDuplicates++;
                continue;
            }

            $stat = new StatistiquesDepartement();
            $stat->setDepartement($departement);
            $stat->setAnnee($annee);

            $stat->setNombreHabitants($this->int($data["Nombre  d'habitants"] ?? null));
            $stat->setDensitePopulation($this->decimal($data["Densité de population au km²"] ?? null));
            $stat->setVariationPopulation($this->decimal($data["Variation de la population sur 10 ans (en %)"] ?? null));
            $stat->setPourcentagePopMoins20($this->decimal($data["% population de moins de 20 ans"] ?? null));
            $stat->setPourcentagePop60Plus($this->decimal($data["% population de 60 ans et plus"] ?? null));
            $stat->setMoyenneConstruction10Ans($this->decimal($data["Moyenne annuelle de la construction neuve sur 10 ans"] ?? null));
            $stat->setTauxChomage($this->decimal($data["Taux de chômage au T4 (en %)"] ?? null));
            $stat->setTauxPauvrete($this->decimal($data["Taux de pauvreté* (en %)"] ?? null));
            $stat->setNombreLogements($this->int($data["Nombre de logements"] ?? null));
            $stat->setResidencesPrincipales($this->int($data["Nombre de résidences principales"] ?? null));
            $stat->setTauxLogementsSociaux($this->decimal($data["Taux de logements sociaux* (en %)"] ?? null));
            $stat->setTauxLogementsVacants($this->decimal($data["Taux de logements vacants* (en %)"] ?? null));
            $stat->setConstructionNeuve($this->decimal($data["Construction"] ?? null));
            $stat->setParcSocialNombreLogements($this->int($data["Parc social - Nombre de logements"] ?? null));
            $stat->setTauxLogementsVacantsParcSocial($this->decimal($data["Parc social - Taux de logements vacants* (en %)"] ?? null));
            $stat->setParcSocialLoyerMoyen($this->decimal($data["Parc social - Loyer moyen (en €/m²/mois)*"] ?? null));
            $stat->setTauxLogementsIndividuels($this->decimal($data["Taux de logements individuels (en %)"] ?? null));
            $stat->setParcSocialLogementsMisLocation($this->int($data["Parc social - Logements mis en location*"] ?? null));

            $this->em->persist($stat);
            $imported++;

            if (($imported % $batchSize) === 0) {
                $this->em->flush();
                $this->em->clear();
            }
        }

        fclose($handle);
        $this->em->flush();

        $output->writeln("<info>Import terminé ✅</info>");
        $output->writeln("<info>Importées : {$imported}</info>");
        $output->writeln("<comment>Ignorées (département introuvable) : {$skippedMissingDept}</comment>");
        $output->writeln("<comment>Ignorées (doublons) : {$skippedDuplicates}</comment>");

        return Command::SUCCESS;
    }

    private function decimal($value): ?float
    {
        if ($value === null || $value === '') {
            return null;
        }

        $v = trim((string) $value);
        $v = str_replace(["\u{00A0}", ' '], '', $v); 
        $v = str_replace(',', '.', $v);

        if ($v === '' || !is_numeric($v)) {
            return null;
        }

        return (float) number_format((float) $v, 2, '.', '');
    }

    private function int($value): ?int
    {
        if ($value === null || $value === '') {
            return null;
        }

        $v = trim((string) $value);
        $v = str_replace(["\u{00A0}", ' '], '', $v);

        if ($v === '' || !is_numeric($v)) {
            return null;
        }

        return (int) $v;
    }

    private function formatCodeDepartement(string $code): string
    {
        $code = trim($code);

        if (in_array($code, ['2A', '2B'], true)) {
            return $code;
        }

        if (ctype_digit($code) && strlen($code) === 3) {
            return $code;
        }

        if (ctype_digit($code)) {
            return str_pad($code, 2, '0', STR_PAD_LEFT);
        }

        return $code;
    }
}