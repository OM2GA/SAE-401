import {ChartBarSquareIcon} from '@heroicons/react/24/outline';

function Titre () {
  return (
    <div className="space-y-6">
      <div>
        <h1 className=" flex items-center gap-2 text-2xl font-bold text-gray-800 mb-2"><ChartBarSquareIcon className="size-8 text-red-500"/> Tableau de bord DataViz</h1>
        <p className="text-gray-500 text-md">Statistique Global</p>
      </div>
    </div>
  );
};

export default Titre;