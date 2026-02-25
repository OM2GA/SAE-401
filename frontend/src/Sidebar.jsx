import { Children } from "react";
import {AdjustmentsHorizontalIcon,ArrowPathIcon} from '@heroicons/react/24/outline';

function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open min-h-screen font-sans">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-gray-50">
        {/* Navbar Mobile */}
        <div className="navbar bg-white border-b lg:hidden w-full">
          <label htmlFor="sidebar-drawer" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
          <div className="flex-1 px-2 font-bold text-red-500">DataViz</div>
        </div>

        <main className="p-8">
          {children}
        </main>
      </div>

      {/*LA SIDEBAR  */}
      <div className="drawer-side z-40">
        <label htmlFor="sidebar-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        
        <div className="flex flex-col w-80 min-h-full bg-white border-r border-gray-200">
          
          {/* Header de la sidebar */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-3xl font-black text-red-500 italic">
              DataViz
            </h1>
          </div>

          {/* Filtres et select */}
          <div className="p-6 grow space-y-6">
            <div className="flex items-center gap-2 text-gray-400 font-bold text-md tracking-widest uppercase">
              <AdjustmentsHorizontalIcon className="h-6 w-6" />
              Filtres
            </div>

            {/* Année */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Année</legend>
              <select className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" defaultValue="default">
                <option value="default" disabled={true}>Selectionner une année</option>
                <option className="hover:bg-red-200 rounded-sm">2021</option>
                <option className="hover:bg-red-200 rounded-sm">2022</option>
                <option className="hover:bg-red-200 rounded-sm">2023</option>
              </select>
            </fieldset>
            {/* Région */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Région</legend>
              <select className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" defaultValue="default">
                <option value="default" disabled={true}>Selectionner une région</option>
                <option className="hover:bg-red-200 rounded-sm">Auvergne-Rhône-Alpes</option>
                <option className="hover:bg-red-200 rounded-sm">Bourgogne-Franche-Comté</option>
                <option className="hover:bg-red-200 rounded-sm">Bretagne</option>
                <option className="hover:bg-red-200 rounded-sm">Centre-Val de Loire</option>
                <option className="hover:bg-red-200 rounded-sm">Corse</option>
                <option className="hover:bg-red-200 rounded-sm">Grand Est</option>
                <option className="hover:bg-red-200 rounded-sm">Hauts-de-France</option>
                <option className="hover:bg-red-200 rounded-sm">Île-de-France</option>
                <option className="hover:bg-red-200 rounded-sm">Normandie</option>
                <option className="hover:bg-red-200 rounded-sm">Nouvelle-Aquitaine</option>
                <option className="hover:bg-red-200 rounded-sm">Occitanie</option>
                <option className="hover:bg-red-200 rounded-sm">Pays de la Loire</option>
                <option className="hover:bg-red-200 rounded-sm">Provence-Alpes-Côte d'Azur</option>
                <option className="hover:bg-red-200 rounded-sm">Guadeloupe</option>
                <option className="hover:bg-red-200 rounded-sm">Martinique</option>
                <option className="hover:bg-red-200 rounded-sm">Guyane</option>
                <option className="hover:bg-red-200 rounded-sm">La Réunion</option>
                <option className="hover:bg-red-200 rounded-sm">Mayotte</option>
              </select>
            </fieldset>

            {/* Département */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Département</legend>
              <select className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" defaultValue="default">
                <option value="default" disabled={true}>Selectionner un département</option>
                <option className="hover:bg-red-200 rounded-sm">Toutes les régions</option>
                <option className="hover:bg-red-200 rounded-sm">Île-de-France</option>
                <option className="hover:bg-red-200 rounded-sm">Auvergne-Rhône-Alpes</option>
              </select>
            </fieldset>
            <button className="btn bg-red-500 hover:bg-red-700 w-full border-none mt-4 text-white font-medium tracking-widest rounded-sm"> <ArrowPathIcon className="h-6 w-6" strokeWidth="2"/> Actualiser</button>
          </div>

          {/* Footer de la sidebar */}
          <div className="p-6 border-t border-gray-100 text-[12px] text-gray-400 space-y-1">
            <p>© 2026 DataViz</p>
          </div>

        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;