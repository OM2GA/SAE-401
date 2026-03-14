

function Apitest({ data }) {
  if (!data) return <div>Aucune donnée</div>;
  return (
    <>
    <div className="bg-gray-100 text-sm w-full break-words">
        {data ? <p>Donnée reçue</p> : <p>Erreur : aucune donnée</p>}  
    </div>
     
    </>
  );
}

export default Apitest;