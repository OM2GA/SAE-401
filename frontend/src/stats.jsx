
import StatCard from './StatCard';
import { BriefcaseIcon, UsersIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function Stats({ data, regionChoisi }) {
  let valeurChomage = "7.3%";
  let valeurPauvrete = "14.5%";
  let valeurPopulation = "67.8 M";

  if (data && data.length > 0) {
    const populations = data.map(d => d.nombreHabitants);
    const tauxChomages = data.map(d => d.tauxChomage);
    const tauxPauvretes = data.map(d => d.tauxPauvrete);
    const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);

    const sommeChomage = tauxChomages.reduce((acc, curr) => acc + curr, 0);
    const sommePauvrete = tauxPauvretes.reduce((acc, curr) => acc + curr, 0);

    valeurChomage = (sommeChomage / data.length).toFixed(1) + "%";
    valeurPauvrete = (sommePauvrete / data.length).toFixed(1) + "%";

    if (totalPopulation >= 1000000) {
      valeurPopulation = (totalPopulation / 1000000).toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + " M";
    } else {
      valeurPopulation = totalPopulation.toLocaleString('fr-FR');
    }
  }

  const titreStats = regionChoisi && regionChoisi !== "default"
    ? `Statistiques globales de la région ${regionChoisi}`
    : "Statistiques globales";

  return (
    <div className="space-y-2">
      <p className="text-gray-500 text-lg">{titreStats}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
        <StatCard title="Taux de chômage" value={valeurChomage} icon={BriefcaseIcon} />
        <StatCard title="Taux de pauvreté" value={valeurPauvrete} icon={ExclamationTriangleIcon} />
        <StatCard title="Population Totale" value={valeurPopulation} icon={UsersIcon} />
      </div>
    </div>
  );
}

export default Stats;