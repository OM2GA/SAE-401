import { ChevronDownIcon } from '@heroicons/react/24/outline';

function Def() {
  return (
    <div className="border-t border-gray-200 mt-3">
      {/*Densité de population*/}
      <details className="collapse rounded border border-gray-200 group">
        <summary className="collapse-title flex items-center justify-between cursor-pointer list-none p-6 hover:bg-gray-200">
          <span className="text-lg font-bold text-slate-900 tracking-tight">
            Qu'est-ce que la densité de population ?
          </span>
          <ChevronDownIcon className="h-6 w-6 text-red-600 transition-transform duration-500 group-open:rotate-180" />
        </summary>
        <div className="collapse-content px-6 ">
          <p className="text-base leading-relaxed text-gray-600 pb-6">
            La <span className="font-bold text-slate-800">densité de population</span> mesure le nombre d'habitants vivant sur une surface donnée, généralement exprimée en <span className="font-bold text-slate-800">habitants par km²</span>. 
            Elle permet d'évaluer l'occupation du territoire et de distinguer les zones <span className="font-bold text-slate-800">urbaines</span> très concentrées des zones <span className="font-bold text-slate-800">rurales</span> plus diffuses.
          </p>
        </div>
      </details>
    </div>
  );
}

export default Def;