import { AdjustmentsHorizontalIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from "react";
import { DataStats } from "./apiCall";

function Sidebar({ children, onDataChange, onDepartementChange }) {

  const [annee, setAnnee] = useState('default');
  const [regionChoisi, setRegionChoisi] = useState('default');
  const [departementChoisi, setDepartementChoisi] = useState('default');

  const hoveroption = "hover:bg-red-200 rounded-sm";

  useEffect(() => {
    const chargerDonnees = async () => {
      if (annee !== "default" && regionChoisi !== "default") {
        const data = await DataStats(regionChoisi, annee);
        onDataChange(data);
      }
    };

    chargerDonnees();
  }, [annee, regionChoisi, onDataChange]);

  // Affichage des départements par region avec un switch pour les select
  const afficherOptionsDepartement = () => {
    switch (regionChoisi) {
      case "Auvergne-Rhône-Alpes":
        return (
          <>
            <option value="Ain"className={hoveroption}>Ain (01)</option>
            <option value="Allier" className={hoveroption}>Allier (03)</option>
            <option value="Ardèche" className={hoveroption}>Ardèche (07)</option>
            <option value="Cantal" className={hoveroption}>Cantal (15)</option>
            <option value="Drôme " className={hoveroption}>Drôme (26)</option>
            <option value="Isère" className={hoveroption}>Isère (38)</option>
            <option value="Loire" className={hoveroption}>Loire (42)</option>
            <option value="Haute-Loire" className={hoveroption}>Haute-Loire (43)</option>
            <option value="Puy-de-Dôme" className={hoveroption}>Puy-de-Dôme (63)</option>
            <option value="Rhône" className={hoveroption}>Rhône (69)</option>
            <option value="Savoie" className={hoveroption}>Savoie (73)</option>
            <option value="Haute-Savoie" className={hoveroption}>Haute-Savoie (74)</option>
          </>
        );
      case "Bourgogne-Franche-Comté":
        return (
          <>
            <option value="Côte-d'Or" className={hoveroption}>Côte-d'Or (21)</option>
            <option value="Doubs" className={hoveroption}>Doubs (25)</option>
            <option value="Jura" className={hoveroption}>Jura (39)</option>
            <option value="Nièvre" className={hoveroption}>Nièvre (58)</option>
            <option value="Haute-Saône" className={hoveroption}>Haute-Saône (70)</option>
            <option value="Saône-et-Loire" className={hoveroption}>Saône-et-Loire (71)</option>
            <option value="Yonne" className={hoveroption}>Yonne (89)</option>
            <option value="Territoire de Belfort" className={hoveroption}>Territoire de Belfort (90)</option>
          </>
        );
      case "Bretagne":
        return (
          <>
            <option value="Côtes-d'Armor" className={hoveroption}>Côtes-d'Armor (22)</option>
            <option value="Finistère" className={hoveroption}>Finistère (29)</option>
            <option value="Ille-et-Vilaine" className={hoveroption}>Ille-et-Vilaine (35)</option>
            <option value="Morbihan" className={hoveroption}>Morbihan (56)</option>
          </>
        );
      case "Centre-Val de Loire":
        return (
          <>
            <option value="Cher" className={hoveroption}>Cher (18)</option>
            <option value="Eure-et-Loir" className={hoveroption}>Eure-et-Loir (28)</option>
            <option value="Indre" className={hoveroption}>Indre (36)</option>
            <option value="Indre-et-Loire" className={hoveroption}>Indre-et-Loire (37)</option>
            <option value="Loir-et-Cher" className={hoveroption}>Loir-et-Cher (41)</option>
            <option value="Loiret" className={hoveroption}>Loiret (45)</option>
          </>
        );
      case "Corse":
        return (
          <>
            <option value="Corse-du-Sud" className={hoveroption}>Corse-du-Sud (2A)</option>
            <option value="Haute-Corse" className={hoveroption}>Haute-Corse (2B)</option>
          </>
        );
      case "Grand Est":
        return (
          <>
            <option value="Ardennes" className={hoveroption}>Ardennes (08)</option>
            <option value="Aube" className={hoveroption}>Aube (10)</option>
            <option value="Bas-Rhin" className={hoveroption}>Bas-Rhin (67)</option>
            <option value="Haut-Rhin" className={hoveroption}>Haut-Rhin (68)</option>
            <option value="Haute-Marne" className={hoveroption}>Haute-Marne (52)</option>
            <option value="Marne" className={hoveroption}>Marne (51)</option>
            <option value="Meurthe-et-Moselle" className={hoveroption}>Meurthe-et-Moselle (54)</option>
            <option value="Meuse" className={hoveroption}>Meuse (55)</option>
            <option value="Moselle" className={hoveroption}>Moselle (57)</option>
            <option value="Vosges" className={hoveroption}>Vosges (88)</option>
          </>
        );
      case "Hauts-de-France":
        return (
          <>
            <option value="Aisne" className={hoveroption}>Aisne (02)</option>
            <option value="Nord" className={hoveroption}>Nord (59)</option>
            <option value="Oise" className={hoveroption}>Oise (60)</option>
            <option value="Pas-de-Calais" className={hoveroption}>Pas-de-Calais (62)</option>
            <option value="Somme" className={hoveroption}>Somme (80)</option>
          </>
        );
      case "Île-de-France":
        return (
          <>
            <option value="Paris" className={hoveroption}>Paris (75)</option>
            <option value="Seine-et-Marne" className={hoveroption}>Seine-et-Marne (77)</option>
            <option value="Yvelines" className={hoveroption}>Yvelines (78)</option>
            <option value="Essonne" className={hoveroption}>Essonne (91)</option>
            <option value="Hauts-de-Seine" className={hoveroption}>Hauts-de-Seine (92)</option>
            <option value="Seine-Saint-Denis" className={hoveroption}>Seine-Saint-Denis (93)</option>
            <option value="Val-de-Marne" className={hoveroption}>Val-de-Marne (94)</option>
            <option value="Val-d'Oise" className={hoveroption}>Val-d'Oise (95)</option>
          </>
        );
      case "Normandie":
        return (
          <>
            <option value="Calvados" className={hoveroption}>Calvados (14)</option>
            <option value="Eure" className={hoveroption}>Eure (27)</option>
            <option value="Manche" className={hoveroption}>Manche (50)</option>
            <option value="Orne" className={hoveroption}>Orne (61)</option>
            <option value="Seine-Maritime" className={hoveroption}>Seine-Maritime (76)</option>
          </>
        );
      case "Nouvelle-Aquitaine":
        return (
          <>
            <option value="Charente" className={hoveroption}>Charente (16)</option>
            <option value="Charente-Maritime" className={hoveroption}>Charente-Maritime (17)</option>
            <option value="Corrèze" className={hoveroption}>Corrèze (19)</option>
            <option value="Creuse" className={hoveroption}>Creuse (23)</option>
            <option value="Dordogne" className={hoveroption}>Dordogne (24)</option>
            <option value="Gironde" className={hoveroption}>Gironde (33)</option>
            <option value="Landes" className={hoveroption}>Landes (40)</option>
            <option value="Lot-et-Garonne" className={hoveroption}>Lot-et-Garonne (47)</option>
            <option value="Pyrénées-Atlantiques" className={hoveroption}>Pyrénées-Atlantiques (64)</option>
            <option value="Deux-Sèvres" className={hoveroption}>Deux-Sèvres (79)</option>
            <option value="Vienne" className={hoveroption}>Vienne (86)</option>
            <option value="Haute-Vienne" className={hoveroption}>Haute-Vienne (87)</option>
          </>
        );
      case "Occitanie":
        return (
          <>
            <option value="Ariège" className={hoveroption}>Ariège (09)</option>
            <option value="Aude" className={hoveroption}>Aude (11)</option>
            <option value="Aveyron" className={hoveroption}>Aveyron (12)</option>
            <option value="Gard" className={hoveroption}>Gard (30)</option>
            <option value="Haute-Garonne" className={hoveroption}>Haute-Garonne (31)</option>
            <option value="Gers" className={hoveroption}>Gers (32)</option>
            <option value="Hérault" className={hoveroption}>Hérault (34)</option>
            <option value="Lot" className={hoveroption}>Lot (46)</option>
            <option value="Lozère" className={hoveroption}>Lozère (48)</option>
            <option value="Hautes-Pyrénées" className={hoveroption}>Hautes-Pyrénées (65)</option>
            <option value="Pyrénées-Orientales" className={hoveroption}>Pyrénées-Orientales (66)</option>
            <option value="Tarn" className={hoveroption}>Tarn (81)</option>
            <option value="Tarn-et-Garonne" className={hoveroption}>Tarn-et-Garonne (82)</option>
          </>
        );
      case "Pays de la Loire":
        return (
          <>
            <option value="Loire-Atlantique" className={hoveroption}>Loire-Atlantique (44)</option>
            <option value="Maine-et-Loire" className={hoveroption}>Maine-et-Loire (49)</option>
            <option value="Mayenne" className={hoveroption}>Mayenne (53)</option>
            <option value="Sarthe" className={hoveroption}>Sarthe (72)</option>
            <option value="Vendée" className={hoveroption}>Vendée (85)</option>
          </>
        );
      case "Provence-Alpes-Côte d'Azur":
        return (
          <>
            <option value="Alpes-de-Haute-Provence" className={hoveroption}>Alpes-de-Haute-Provence (04)</option>
            <option value="Hautes-Alpes" className={hoveroption}>Hautes-Alpes (05)</option>
            <option value="Alpes-Maritimes" className={hoveroption}>Alpes-Maritimes (06)</option>
            <option value="Bouches-du-Rhône" className={hoveroption}>Bouches-du-Rhône (13)</option>
            <option value="Var" className={hoveroption}>Var (83)</option>
            <option value="Vaucluse" className={hoveroption}>Vaucluse (84)</option>
          </>
        );
      case "Guadeloupe":
        return <option value="Guadeloupe" className={hoveroption}>Guadeloupe (971)</option>;
      case "Martinique":
        return <option value="Martinique" className={hoveroption}>Martinique (972)</option>;
      case "Guyane":
        return <option value="Guyane" className={hoveroption}>Guyane (973)</option>;
      case "La Réunion":
        return <option value="La Réunion" className={hoveroption}>La Réunion (974)</option>;
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
              <select className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md" 
                value={annee}
                onChange={(e) => {
                  setAnnee(e.target.value);
                }}
              >
                <option value="default" disabled={true}>Selectionner une année</option>
                <option value="2021" className={hoveroption}>2021</option>
                <option value="2022" className={hoveroption}>2022</option>
                <option value="2023" className={hoveroption}>2023</option>
              </select>
            </fieldset>
            
            {/* Région */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Région</legend>
              <select
                className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md"
                value={regionChoisi}
                onChange={(e) => {
                  setRegionChoisi(e.target.value);
                  setDepartementChoisi('default'); 

                }}
                disabled={annee === "default"}
              >
                <option value="default" disabled={true}>Selectionner une région</option>
                <option value="Auvergne-Rhône-Alpes" className={hoveroption}>Auvergne-Rhône-Alpes</option>
                <option value="Bourgogne-Franche-Comté" className={hoveroption}>Bourgogne-Franche-Comté</option>
                <option value="Bretagne" className={hoveroption}>Bretagne</option>
                <option value="Centre-Val de Loire" className={hoveroption}>Centre-Val de Loire</option>
                <option value="Corse" className={hoveroption}>Corse</option>
                <option value="Grand Est" className={hoveroption}>Grand Est</option>
                <option value="Hauts-de-France" className={hoveroption}>Hauts-de-France</option>
                <option value="Île-de-France" className={hoveroption}>Île-de-France</option>
                <option value="Normandie" className={hoveroption}>Normandie</option>
                <option value="Nouvelle-Aquitaine" className={hoveroption}>Nouvelle-Aquitaine</option>
                <option value="Occitanie" className={hoveroption}>Occitanie</option>
                <option value="Pays de la Loire" className={hoveroption}>Pays de la Loire</option>
                <option value="Provence-Alpes-Côte d'Azur" className={hoveroption}>Provence-Alpes-Côte d'Azur</option>
                <option value="Guadeloupe" className={hoveroption}>Guadeloupe</option>
                <option value="Martinique" className={hoveroption}>Martinique</option>
                <option value="Guyane" className={hoveroption}>Guyane</option>
                <option value="La Réunion" className={hoveroption}>La Réunion</option>
              </select>
            </fieldset>

            {/* Département */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-gray-600 font-semibold text-sm mb-1">Département</legend>
              <select
                className="select select-bordered w-full bg-gray-100 h-10 text-sm border border-gray-300 hover:border-red-500 rounded-md"
                value={departementChoisi}
                onChange={(e) => {
                  setDepartementChoisi(e.target.value);
                  onDepartementChange(e.target.value);
                }}
                disabled={regionChoisi === "default"}
              >
                <option value="default" disabled={true}>Selectionner un département</option>
                {afficherOptionsDepartement()}
              </select>
            </fieldset>
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