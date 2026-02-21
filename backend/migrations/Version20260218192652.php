<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260218192652 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE statistique (id INT AUTO_INCREMENT NOT NULL, annee INT NOT NULL, nombre_habitants INT DEFAULT NULL, densite_population DOUBLE PRECISION DEFAULT NULL, variation_population DOUBLE PRECISION DEFAULT NULL, pourcentage_pop_moins20 DOUBLE PRECISION DEFAULT NULL, pourcentage_pop_60plus DOUBLE PRECISION DEFAULT NULL, moyenne_construction_10ans DOUBLE PRECISION DEFAULT NULL, taux_logements_vacants_parc_social DOUBLE PRECISION DEFAULT NULL, taux_chomage DOUBLE PRECISION DEFAULT NULL, taux_pauvrete DOUBLE PRECISION DEFAULT NULL, nombre_logements INT DEFAULT NULL, taux_logements_sociaux DOUBLE PRECISION DEFAULT NULL, taux_logements_vacants DOUBLE PRECISION DEFAULT NULL, construction_neuve INT DEFAULT NULL, parc_social_nombre_logements INT DEFAULT NULL, parc_social_loyer_moyen DOUBLE PRECISION DEFAULT NULL, residences_principales INT DEFAULT NULL, departement_id INT NOT NULL, INDEX IDX_73A038ADCCF9E01E (departement_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE statistique ADD CONSTRAINT FK_73A038ADCCF9E01E FOREIGN KEY (departement_id) REFERENCES departement (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE statistique DROP FOREIGN KEY FK_73A038ADCCF9E01E');
        $this->addSql('DROP TABLE statistique');
    }
}
