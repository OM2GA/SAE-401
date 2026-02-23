<?php

namespace App\Entity;

use App\Repository\StatistiquesDepartementRepository;
use Symfony\Component\Serializer\Attribute\Groups;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StatistiquesDepartementRepository::class)]
#[ORM\Table(name: "statistique")]
class StatistiquesDepartement
{  
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: "integer")]
    private ?int $annee = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: "departement_id", referencedColumnName: "id", nullable: false, onDelete: "CASCADE")]
    private ?Departement $departement = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "nombre_habitants", type: "integer", nullable: true)]
    private ?int $nombreHabitants = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "densite_population", type: "float", nullable: true)]
    private ?float $densitePopulation = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "variation_population", type: "float", nullable: true)]
    private ?float $variationPopulation = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "pourcentage_pop_moins20", type: "float", nullable: true)]
    private ?float $pourcentagePopMoins20 = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "pourcentage_pop_60plus", type: "float", nullable: true)]
    private ?float $pourcentagePop60Plus = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "moyenne_construction_10ans", type: "float", nullable: true)]
    private ?float $moyenneConstruction10Ans = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_logements_vacants_parc_social", type: "float", nullable: true)]
    private ?float $tauxLogementsVacantsParcSocial = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_chomage", type: "float", nullable: true)]
    private ?float $tauxChomage = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_pauvrete", type: "float", nullable: true)]
    private ?float $tauxPauvrete = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "nombre_logements", type: "integer", nullable: true)]
    private ?int $nombreLogements = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_logements_sociaux", type: "float", nullable: true)]
    private ?float $tauxLogementsSociaux = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_logements_vacants", type: "float", nullable: true)]
    private ?float $tauxLogementsVacants = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "construction_neuve", type: "integer", nullable: true)]
    private ?int $constructionNeuve = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "parc_social_nombre_logements", type: "integer", nullable: true)]
    private ?int $parcSocialNombreLogements = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "parc_social_loyer_moyen", type: "float", nullable: true)]
    private ?float $parcSocialLoyerMoyen = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "residences_principales", type: "integer", nullable: true)]
    private ?int $residencesPrincipales = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "taux_logements_individuels", type: "float", nullable: true)]
    private ?float $tauxLogementsIndividuels = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "parc_social_logements_mis_location", type: "integer", nullable: true)]
    private ?int $parcSocialLogementsMisLocation = null;

    // GETTERS ET SETTERS 
    public function getId(): ?int { return $this->id; }
    public function getAnnee(): ?int { return $this->annee; }
    public function setAnnee(int $annee): self { $this->annee = $annee; return $this; }
    public function getDepartement(): ?Departement { return $this->departement; }
    public function setDepartement(?Departement $departement): self { $this->departement = $departement; return $this; }
    public function setNombreHabitants(?int $val): self { $this->nombreHabitants = $val; return $this; }
    public function setDensitePopulation(?float $val): self { $this->densitePopulation = $val; return $this; }
    public function setVariationPopulation(?float $val): self { $this->variationPopulation = $val; return $this; }
    public function setPourcentagePopMoins20(?float $val): self { $this->pourcentagePopMoins20 = $val; return $this; }
    public function setPourcentagePop60Plus(?float $val): self { $this->pourcentagePop60Plus = $val; return $this; }
    public function setMoyenneConstruction10Ans(?float $val): self { $this->moyenneConstruction10Ans = $val; return $this; }
    public function setTauxLogementsVacantsParcSocial(?float $val): self { $this->tauxLogementsVacantsParcSocial = $val; return $this; }
    public function setTauxChomage(?float $val): self { $this->tauxChomage = $val; return $this; }
    public function setTauxPauvrete(?float $val): self { $this->tauxPauvrete = $val; return $this; }
    public function setNombreLogements(?int $val): self { $this->nombreLogements = $val; return $this; }
    public function setTauxLogementsSociaux(?float $val): self { $this->tauxLogementsSociaux = $val; return $this; }
    public function setTauxLogementsVacants(?float $val): self { $this->tauxLogementsVacants = $val; return $this; }
    public function setConstructionNeuve(?int $val): self { $this->constructionNeuve = $val; return $this; }
    public function setParcSocialNombreLogements(?int $val): self { $this->parcSocialNombreLogements = $val; return $this; }
    public function setParcSocialLoyerMoyen(?float $val): self { $this->parcSocialLoyerMoyen = $val; return $this; }
    public function setResidencesPrincipales(?int $val): self { $this->residencesPrincipales = $val; return $this; }
    public function setTauxLogementsIndividuels(?float $val): self{$this->tauxLogementsIndividuels = $val;return $this;}
    public function setParcSocialLogementsMisLocation(?int $val): self{$this->parcSocialLogementsMisLocation = $val;return $this;}

    public function getNombreHabitants(): ?int
    {
        return $this->nombreHabitants;
    }

    public function getDensitePopulation(): ?float
    {
        return $this->densitePopulation;
    }

    public function getVariationPopulation(): ?float
    {
        return $this->variationPopulation;
    }

    public function getPourcentagePopMoins20(): ?float
    {
        return $this->pourcentagePopMoins20;
    }

    public function getPourcentagePop60Plus(): ?float
    {
        return $this->pourcentagePop60Plus;
    }

    public function getMoyenneConstruction10Ans(): ?float
    {
        return $this->moyenneConstruction10Ans;
    }

    public function getTauxLogementsVacantsParcSocial(): ?float
    {
        return $this->tauxLogementsVacantsParcSocial;
    }

    public function getTauxChomage(): ?float
    {
        return $this->tauxChomage;
    }

    public function getTauxPauvrete(): ?float
    {
        return $this->tauxPauvrete;
    }

    public function getNombreLogements(): ?int
    {
        return $this->nombreLogements;
    }

    public function getTauxLogementsSociaux(): ?float
    {
        return $this->tauxLogementsSociaux;
    }

    public function getTauxLogementsVacants(): ?float
    {
        return $this->tauxLogementsVacants;
    }

    public function getConstructionNeuve(): ?int
    {
        return $this->constructionNeuve;
    }

    public function getParcSocialNombreLogements(): ?int
    {
        return $this->parcSocialNombreLogements;
    }

    public function getParcSocialLoyerMoyen(): ?float
    {
        return $this->parcSocialLoyerMoyen;
    }

    public function getResidencesPrincipales(): ?int
    {
        return $this->residencesPrincipales;
    }

    public function getTauxLogementsIndividuels(): ?float
    {
        return $this->tauxLogementsIndividuels;
    }

    public function getParcSocialLogementsMisLocation(): ?int
    {
        return $this->parcSocialLogementsMisLocation;
    }
}