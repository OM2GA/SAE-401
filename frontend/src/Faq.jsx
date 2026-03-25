import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function FaqItem({ question, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between cursor-pointer list-none p-6 hover:bg-gray-200 transition-colors duration-200"
      >
        <span className="text-lg font-bold text-slate-900">
          {question}
        </span>
        <ChevronDownIcon
          className={`h-6 w-6 text-red-600 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? '300px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <div className="space-y-0 border-t border-gray-200">

      <FaqItem question="Qu'est-ce qu'un logement social ?">
        <p className="text-base leading-relaxed text-gray-600">
          Un <span className="font-bold text-slate-800">logement social</span> est destiné aux personnes dont les revenus ne dépassent pas certains <span className="font-bold text-slate-800">plafonds</span>.
          Il bénéficie d'un <span className="font-bold text-slate-800">financement public</span> et son loyer est strictement encadré.
          L'objectif est de garantir aux ménages modestes un accès à un habitat digne à un <span className="font-bold text-slate-800">prix inférieur</span> au marché privé.
        </p>
      </FaqItem>

      <FaqItem question="Qu'est-ce qu'un logement vacant ?">
        <p className="text-base leading-relaxed text-gray-600">
          Un logement est considéré comme <span className="font-bold text-slate-800">vacant</span> s'il est inoccupé au moment du recensement.
          Il ne doit être ni une <span className="font-bold text-slate-800">résidence secondaire</span>, ni un logement occasionnel.
          Cette situation résulte souvent d'une mise en vente, d'une <span className="font-bold text-slate-800">attente de travaux</span> ou d'un logement en cours de relocation.
        </p>
      </FaqItem>

    </div>
  );
}

export { FaqItem };
export default Faq;