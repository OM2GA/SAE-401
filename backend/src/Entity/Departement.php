<?php

namespace App\Entity;

use App\Repository\DepartementRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Groups;

#[ORM\Entity(repositoryClass: DepartementRepository::class)]
#[ORM\Table(name: "departement")]
class Departement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(name: "code_departement", length: 10)]
    private ?string $codeDepartement = null;

    #[Groups(['stats:read'])]
    #[ORM\Column(name: "nom_departement", length: 100)]
    private ?string $nomDepartement = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(name: "region_id", referencedColumnName: "id", nullable: false)]
    private ?Region $region = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodeDepartement(): ?string
    {
        return $this->codeDepartement;
    }

    public function setCodeDepartement(string $codeDepartement): static
    {
        $this->codeDepartement = $codeDepartement;
        return $this;
    }

    public function getNomDepartement(): ?string
    {
        return $this->nomDepartement;
    }

    public function setNomDepartement(string $nomDepartement): static
    {
        $this->nomDepartement = $nomDepartement;
        return $this;
    }

    public function getRegion(): ?Region
    {
        return $this->region;
    }

    public function setRegion(?Region $region): static
    {
        $this->region = $region;
        return $this;
    }
}