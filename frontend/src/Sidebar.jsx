import { Children } from "react";
import { AdjustmentsHorizontalIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState } from "react";

function Sidebar({ children }) {

  const [annee, setAnnee] = useState('default');
  const [regionChoisie, setRegionChoisie] = useState('default');
  const [departementChoisi, setDepartementChoisi] = useState('default');

  // Cette fonction gère l'affichage des départements avec un switch
  const afficherOptionsDepartement = () => {
    switch (regionChoisie) {
      case "Auvergne-Rhône-Alpes":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Ain (01)</option>
            <option className="hover:bg-red-200 rounded-sm">Allier (03)</option>
            <option className="hover:bg-red-200 rounded-sm">Ardèche (07)</option>
            <option className="hover:bg-red-200 rounded-sm">Cantal (15)</option>
            <option className="hover:bg-red-200 rounded-sm">Drôme (26)</option>
            <option className="hover:bg-red-200 rounded-sm">Isère (38)</option>
            <option className="hover:bg-red-200 rounded-sm">Loire (42)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Loire (43)</option>
            <option className="hover:bg-red-200 rounded-sm">Puy-de-Dôme (63)</option>
            <option className="hover:bg-red-200 rounded-sm">Rhône (69)</option>
            <option className="hover:bg-red-200 rounded-sm">Savoie (73)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Savoie (74)</option>
          </>
        );
      case "Bourgogne-Franche-Comté":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Côte-d'Or (21)</option>
            <option className="hover:bg-red-200 rounded-sm">Doubs (25)</option>
            <option className="hover:bg-red-200 rounded-sm">Jura (39)</option>
            <option className="hover:bg-red-200 rounded-sm">Nièvre (58)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Saône (70)</option>
            <option className="hover:bg-red-200 rounded-sm">Saône-et-Loire (71)</option>
            <option className="hover:bg-red-200 rounded-sm">Yonne (89)</option>
            <option className="hover:bg-red-200 rounded-sm">Territoire de Belfort (90)</option>
          </>
        );
      case "Bretagne":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Côtes-d'Armor (22)</option>
            <option className="hover:bg-red-200 rounded-sm">Finistère (29)</option>
            <option className="hover:bg-red-200 rounded-sm">Ille-et-Vilaine (35)</option>
            <option className="hover:bg-red-200 rounded-sm">Morbihan (56)</option>
          </>
        );
      case "Centre-Val de Loire":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Cher (18)</option>
            <option className="hover:bg-red-200 rounded-sm">Eure-et-Loir (28)</option>
            <option className="hover:bg-red-200 rounded-sm">Indre (36)</option>
            <option className="hover:bg-red-200 rounded-sm">Indre-et-Loire (37)</option>
            <option className="hover:bg-red-200 rounded-sm">Loir-et-Cher (41)</option>
            <option className="hover:bg-red-200 rounded-sm">Loiret (45)</option>
          </>
        );
      case "Corse":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Corse-du-Sud (2A)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Corse (2B)</option>
          </>
        );
      case "Grand Est":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Ardennes (08)</option>
            <option className="hover:bg-red-200 rounded-sm">Aube (10)</option>
            <option className="hover:bg-red-200 rounded-sm">Bas-Rhin (67)</option>
            <option className="hover:bg-red-200 rounded-sm">Haut-Rhin (68)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Marne (52)</option>
            <option className="hover:bg-red-200 rounded-sm">Marne (51)</option>
            <option className="hover:bg-red-200 rounded-sm">Meurthe-et-Moselle (54)</option>
            <option className="hover:bg-red-200 rounded-sm">Meuse (55)</option>
            <option className="hover:bg-red-200 rounded-sm">Moselle (57)</option>
            <option className="hover:bg-red-200 rounded-sm">Vosges (88)</option>
          </>
        );
      case "Hauts-de-France":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Aisne (02)</option>
            <option className="hover:bg-red-200 rounded-sm">Nord (59)</option>
            <option className="hover:bg-red-200 rounded-sm">Oise (60)</option>
            <option className="hover:bg-red-200 rounded-sm">Pas-de-Calais (62)</option>
            <option className="hover:bg-red-200 rounded-sm">Somme (80)</option>
          </>
        );
      case "Île-de-France":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Paris (75)</option>
            <option className="hover:bg-red-200 rounded-sm">Seine-et-Marne (77)</option>
            <option className="hover:bg-red-200 rounded-sm">Yvelines (78)</option>
            <option className="hover:bg-red-200 rounded-sm">Essonne (91)</option>
            <option className="hover:bg-red-200 rounded-sm">Hauts-de-Seine (92)</option>
            <option className="hover:bg-red-200 rounded-sm">Seine-Saint-Denis (93)</option>
            <option className="hover:bg-red-200 rounded-sm">Val-de-Marne (94)</option>
            <option className="hover:bg-red-200 rounded-sm">Val-d'Oise (95)</option>
          </>
        );
      case "Normandie":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Calvados (14)</option>
            <option className="hover:bg-red-200 rounded-sm">Eure (27)</option>
            <option className="hover:bg-red-200 rounded-sm">Manche (50)</option>
            <option className="hover:bg-red-200 rounded-sm">Orne (61)</option>
            <option className="hover:bg-red-200 rounded-sm">Seine-Maritime (76)</option>
          </>
        );
      case "Nouvelle-Aquitaine":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Charente (16)</option>
            <option className="hover:bg-red-200 rounded-sm">Charente-Maritime (17)</option>
            <option className="hover:bg-red-200 rounded-sm">Corrèze (19)</option>
            <option className="hover:bg-red-200 rounded-sm">Creuse (23)</option>
            <option className="hover:bg-red-200 rounded-sm">Dordogne (24)</option>
            <option className="hover:bg-red-200 rounded-sm">Gironde (33)</option>
            <option className="hover:bg-red-200 rounded-sm">Landes (40)</option>
            <option className="hover:bg-red-200 rounded-sm">Lot-et-Garonne (47)</option>
            <option className="hover:bg-red-200 rounded-sm">Pyrénées-Atlantiques (64)</option>
            <option className="hover:bg-red-200 rounded-sm">Deux-Sèvres (79)</option>
            <option className="hover:bg-red-200 rounded-sm">Vienne (86)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Vienne (87)</option>
          </>
        );
      case "Occitanie":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Ariège (09)</option>
            <option className="hover:bg-red-200 rounded-sm">Aude (11)</option>
            <option className="hover:bg-red-200 rounded-sm">Aveyron (12)</option>
            <option className="hover:bg-red-200 rounded-sm">Gard (30)</option>
            <option className="hover:bg-red-200 rounded-sm">Haute-Garonne (31)</option>
            <option className="hover:bg-red-200 rounded-sm">Gers (32)</option>
            <option className="hover:bg-red-200 rounded-sm">Hérault (34)</option>
            <option className="hover:bg-red-200 rounded-sm">Lot (46)</option>
            <option className="hover:bg-red-200 rounded-sm">Lozère (48)</option>
            <option className="hover:bg-red-200 rounded-sm">Hautes-Pyrénées (65)</option>
            <option className="hover:bg-red-200 rounded-sm">Pyrénées-Orientales (66)</option>
            <option className="hover:bg-red-200 rounded-sm">Tarn (81)</option>
            <option className="hover:bg-red-200 rounded-sm">Tarn-et-Garonne (82)</option>
          </>
        );
      case "Pays de la Loire":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Loire-Atlantique (44)</option>
            <option className="hover:bg-red-200 rounded-sm">Maine-et-Loire (49)</option>
            <option className="hover:bg-red-200 rounded-sm">Mayenne (53)</option>
            <option className="hover:bg-red-200 rounded-sm">Sarthe (72)</option>
            <option className="hover:bg-red-200 rounded-sm">Vendée (85)</option>
          </>
        );
      case "Provence-Alpes-Côte d'Azur":
        return (
          <>
            <option className="hover:bg-red-200 rounded-sm">Alpes-de-Haute-Provence (04)</option>
            <option className="hover:bg-red-200 rounded-sm">Hautes-Alpes (05)</option>
            <option className="hover:bg-red-200 rounded-sm">Alpes-Maritimes (06)</option>
            <option className="hover:bg-red-200 rounded-sm">Bouches-du-Rhône (13)</option>
            <option className="hover:bg-red-200 rounded-sm">Var (83)</option>
            <option className="hover:bg-red-200 rounded-sm">Vaucluse (84)</option>
          </>
        );
      case "Guadeloupe":
        return <option className="hover:bg-red-200 rounded-sm">Guadeloupe (971)</option>;
      case "Martinique":
        return <option className="hover:bg-red-200 rounded-sm">Martinique (972)</option>;
      case "Guyane":
        return <option className="hover:bg-red-200 rounded-sm">Guyane (973)</option>;
      case "La Réunion":
        return <option className="hover:bg-red-200 rounded-sm">La Réunion (974)</option>;
      case "Mayotte":
        return <option className="hover:bg-red-200 rounded-sm">Mayotte (976)</option>;
      default:
        return null;
    }
  };

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
          <div className="p-6 grow space-y-6 pb-32 overflow-y-auto">
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
              <select 
                className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" 
                value={regionChoisie} 
                onChange={(e) => {
                  setRegionChoisie(e.target.value);
                  setDepartementChoisi('default'); // On réinitialise le département
                }}
              >
                <option value="default" disabled={true}>Selectionner une région</option>
                <option value="Auvergne-Rhône-Alpes" className="hover:bg-red-200 rounded-sm">Auvergne-Rhône-Alpes</option>
                <option value="Bourgogne-Franche-Comté" className="hover:bg-red-200 rounded-sm">Bourgogne-Franche-Comté</option>
                <option value="Bretagne" className="hover:bg-red-200 rounded-sm">Bretagne</option>
                <option value="Centre-Val de Loire" className="hover:bg-red-200 rounded-sm">Centre-Val de Loire</option>
                <option value="Corse" className="hover:bg-red-200 rounded-sm">Corse</option>
                <option value="Grand Est" className="hover:bg-red-200 rounded-sm">Grand Est</option>
                <option value="Hauts-de-France" className="hover:bg-red-200 rounded-sm">Hauts-de-France</option>
                <option value="Île-de-France" className="hover:bg-red-200 rounded-sm">Île-de-France</option>
                <option value="Normandie" className="hover:bg-red-200 rounded-sm">Normandie</option>
                <option value="Nouvelle-Aquitaine" className="hover:bg-red-200 rounded-sm">Nouvelle-Aquitaine</option>
                <option value="Occitanie" className="hover:bg-red-200 rounded-sm">Occitanie</option>
                <option value="Pays de la Loire" className="hover:bg-red-200 rounded-sm">Pays de la Loire</option>
                <option value="Provence-Alpes-Côte d'Azur" className="hover:bg-red-200 rounded-sm">Provence-Alpes-Côte d'Azur</option>
                <option value="Guadeloupe" className="hover:bg-red-200 rounded-sm">Guadeloupe</option>
                <option value="Martinique" className="hover:bg-red-200 rounded-sm">Martinique</option>
                <option value="Guyane" className="hover:bg-red-200 rounded-sm">Guyane</option>
                <option value="La Réunion" className="hover:bg-red-200 rounded-sm">La Réunion</option>
                <option value="Mayotte" className="hover:bg-red-200 rounded-sm">Mayotte</option>
              </select>
            </fieldset>

            {/* Département */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Département</legend>
              <select 
                className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" 
                value={departementChoisi}
                onChange={(e) => setDepartementChoisi(e.target.value)}
                disabled={regionChoisie === "default"} 
              >
                <option value="default" disabled={true}>Selectionner un département</option>
                {afficherOptionsDepartement()}
              </select>
            </fieldset>
            <button className="btn bg-red-500 hover:bg-red-700 w-full border-none mt-4 text-white font-medium tracking-widest rounded-sm"> <ArrowPathIcon className="h-6 w-6" strokeWidth="2" /> Actualiser</button>
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