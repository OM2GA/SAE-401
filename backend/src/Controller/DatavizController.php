<?php
namespace App\Controller;

use App\Entity\StatistiquesDepartement;
use App\Entity\Region;
use App\Entity\Departement;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class DatavizController extends AbstractController
{
    #[Route('/api/stats/{nomDepartement}/{annee}',methods: ['GET'], name: 'api_stats')]
    public function getStats(string $nomDepartement, int $annee, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $departement = $entityManager->getRepository(Departement::class)->findOneBy(['nomDepartement' => $nomDepartement]);

        if (!$departement) {
            return new JsonResponse(['message' => 'Département introuvable'], 404);
        }
        $stats= $entityManager->getRepository(StatistiquesDepartement::class)->findOneBy(['departement' => $departement, 'annee' => $annee]);

        if (!$stats) {
            return new JsonResponse(
                ['message' => 'Statistiques introuvables pour ce département et cette année'],404
            );
        }

        return $this->json(
            $stats,
            context: ['groups' => ['stats:read']]
         );
    }

    #[Route('/api/stats/region/{nomRegion}/{annee}', methods: ['GET'], name: 'api_stats_region')]
    public function getStatsRegion(string $nomRegion, int $annee, Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $region = $entityManager->getRepository(Region::class)->findOneBy(['nomRegion' => $nomRegion]);

        //erreur si la region existe pas
        if (!$region) {
            return new JsonResponse(['message' => 'Région introuvable'], 404);
        }
        //recuperer tous les departements qui sont dans la region 
        $departements = $entityManager->getRepository(Departement::class)->findBy(['region' => $region]);

        //recuperer les statistiques de tout les departements de la region
        $stats = $entityManager->getRepository(StatistiquesDepartement::class)->findBy([
            'departement' => $departements,
            'annee' => $annee
        ]);

        if (!$stats || count($stats) === 0) {
            return new JsonResponse(
                ['message' => 'Statistiques introuvables pour cette région et cette année'],404
            );
        }

        return $this->json(
            $stats,
            context: ['groups' => ['stats:read']]
        );
    }
}