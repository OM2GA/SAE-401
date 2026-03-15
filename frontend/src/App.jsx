import { useState } from 'react';
import Apitest from './Apitest';
import './App.css'
import Sidebar from './Sidebar';
import Titre from './Titre';
import Stats from './stats';
import ChartpopAge from './ChartPopAge';
import ChartChomage from './ChartChomage';


function App() {
  const [data, setData] = useState(null);
  const [departementChoisi, setDepartementChoisi] = useState("default");
  return (
    <>
      <Sidebar onDataChange={setData} onDepartementChange={setDepartementChoisi}>
        <Titre />
        <Stats />
        <Apitest data={data} />
        <ChartpopAge data={data} departementChoisi={departementChoisi}/>
        <ChartChomage data={data} departementChoisi={departementChoisi}/>
      </Sidebar>
    </>
  )
}

export default App
