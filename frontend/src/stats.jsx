
import StatCard from './StatCard';
import { BriefcaseIcon, UsersIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function Stats({ data }) {
  // Valeurs par défaut (Toute la France)
  let valeurChomage = "7.3%";
  let valeurPauvrete = "14.5%";
  let valeurPopulation = "67.8 M";

  // Si on a des données de la région
  if (data && data.length > 0) {
    // On extrait les valeurs avec map
    const populations = data.map(d => d.nombreHabitants);
    const tauxChomages = data.map(d => d.tauxChomage);
    const tauxPauvretes = data.map(d => d.tauxPauvrete);

    // On additionne le tout
    const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

    // Pour les pourcentages, on fait la somme puis on divise par le nombre de départements pour avoir la moyenne de la région
    const sommeChomage = tauxChomages.reduce((acc, curr) => acc + curr, 0);
    const sommePauvrete = tauxPauvretes.reduce((acc, curr) => acc + curr, 0);

    valeurChomage = (sommeChomage / data.length).toFixed(1) + "%";
    valeurPauvrete = (sommePauvrete / data.length).toFixed(1) + "%";

    // Formatage de la population (en Millions si > 1M, sinon format classique)
    if (totalPopulation >= 1000000) {
      valeurPopulation = (totalPopulation / 1000000).toFixed(1) + " M";
    } else {
      valeurPopulation = totalPopulation;
    }
  }

  return (
    <div className="space-y-6">
      <p className="text-gray-500 text-md">Statistique Global</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <StatCard title="Taux de chômage" value={valeurChomage} icon={BriefcaseIcon} />
        <StatCard title="Taux de pauvreté" value={valeurPauvrete} icon={ExclamationTriangleIcon} />
        <StatCard title="Population Totale" value={valeurPopulation} icon={UsersIcon} />
      </div>
    </div>
  );
}

export default Stats;