import axios from 'axios'; 

export const DataStats = async (region, annee) => {
  try {
    const response = await axios.get(`https://darkgray-crane-237519.hostingersite.com/api/stats/region/${region}/${annee}`)
    console.log("DONNEES:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Erreur API:", error.message);
  }
};