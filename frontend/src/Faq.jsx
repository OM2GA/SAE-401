import { ChevronDownIcon } from '@heroicons/react/24/outline';

function Faq() {
  return (
    <div className="space-y-0 border-t border-gray-200"> {/* On colle les éléments pour un look plus compact */}
      
      {/* Logement Social */}
      <details className="collapse rounded-none border border-gray-200 group">
        <summary className="collapse-title flex items-center justify-between cursor-pointer list-none p-6 hover:bg-gray-200">
          <span className="text-lg font-bold text-slate-900 tracking-tight">
            Qu'est-ce qu'un logement social ?
          </span>
          <ChevronDownIcon className="h-6 w-6 text-red-600 transition-transform duration-500 group-open:rotate-180" />
        </summary>
        <div className="collapse-content px-6">
          <p className="text-base leading-relaxed text-gray-600 pb-6">
            Un <span className="font-bold text-slate-800">logement social</span> est destiné aux personnes dont les revenus ne dépassent pas certains <span className="font-bold text-slate-800">plafonds</span>. 
            Il bénéficie d'un <span className="font-bold text-slate-800">financement public</span> et son loyer est strictement encadré. 
            L'objectif est de garantir aux ménages modestes un accès à un habitat digne à un <span className="font-bold text-slate-800">prix inférieur</span> au marché privé.
          </p>
        </div>
      </details>

      {/* Logement Vacant */}
      <details className="collapse rounded border border-gray-200 group ">
        <summary className="collapse-title flex items-center justify-between cursor-pointer list-none p-6 hover:bg-gray-200">
          <span className="text-lg font-bold text-slate-900 tracking-tight">
            Qu'est-ce qu'un logement vacant ?
          </span>
          <ChevronDownIcon className="h-6 w-6 text-red-600 transition-transform duration-500 group-open:rotate-180" />
        </summary>
        <div className="collapse-content px-6">
          <p className="text-base leading-relaxed text-gray-600 pb-6">
            Un logement est considéré comme <span className="font-bold text-slate-800">vacant</span> s'il est inoccupé au moment du recensement. 
            Il ne doit être ni une <span className="font-bold text-slate-800">résidence secondaire</span>, ni un logement occasionnel. 
            Cette situation résulte souvent d'une mise en vente, d'une <span className="font-bold text-slate-800">attente de travaux</span> ou d'un logement en cours de relocation.
          </p>
        </div>
      </details>

    </div>
  );
}

export default Faq;