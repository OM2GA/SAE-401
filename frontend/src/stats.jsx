
import StatCard from './StatCard';
import { BriefcaseIcon, UsersIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

function Stats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <StatCard title="Taux de chômage" value="7.3%" icon={BriefcaseIcon} />
        <StatCard title="Taux de pauvreté" value="14.5%" icon={ExclamationTriangleIcon} />
        <StatCard title="Population Totale" value="67.8 M" icon={UsersIcon} />
      </div>
    </div>
  );
}

export default Stats;