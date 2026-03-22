import { useState } from 'react';
import './App.css'

import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Sidebar from './Sidebar';
import Titre from './Titre';
import Stats from './stats';
import ChartpopAge from './ChartPopAge';
import ChartChomage from './ChartChomage';
import ChartDensiteLogement from './ChartDensiteLogement';
import ChartLogements from './ChartLogements';
import ChartConstruction from './ChartConstruction';



function App() {
  const [data, setData] = useState(null);
  const [departementChoisi, setDepartementChoisi] = useState("default");
  const [regionChoisi, setRegionChoisi] = useState("default");
  return (
    <>
      <Sidebar onDataChange={setData} onDepartementChange={setDepartementChoisi} onRegionChange={setRegionChoisi}>
        <Titre/>
        <Stats data={data} />
        {departementChoisi === "default" ? (
          <div className="hero bg-gray-100 rounded-2xl mt-10 py-16 border-3 border-dashed border-red-500">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <InformationCircleIcon className="size-16 text-red-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-red-500">En attente de filtres</h2>
                <p className="py-4 text-gray-500">
                  Veuillez sélectionner une année, une région et un département dans le menu latéral pour afficher l'ensemble des statistiques détaillées.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChartpopAge data={data} departementChoisi={departementChoisi} />
            <ChartChomage data={data} departementChoisi={departementChoisi} />
            <ChartDensiteLogement data={data} departementChoisi={departementChoisi} />
            <ChartLogements data={data} departementChoisi={departementChoisi} />
            <ChartConstruction regionChoisi={regionChoisi} />
          </div>

        )}

      </Sidebar>
    </>
  )
}

export default App
