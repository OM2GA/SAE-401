

function Apitest({ data }) {
  if (!data) return <div>Aucune donnée</div>;
  return (
    <>
    <div className="w-full break-words mb-10">
        {data ? <p className="text-green-400">Test API: Donnée reçue avec succés</p> : <p className="text-red-500">Test API Erreur : aucune donnée</p>}  
    </div>
     
    </>
  );
}

export default Apitest;