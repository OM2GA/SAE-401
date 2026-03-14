import axios from 'axios'; 

export const DataStats = async (region, annee) => {
  try {
    const response = await axios.get(`/api/stats/region/${region}/${annee}`);
    
    return response.data; 
  } catch (error) {
    console.error("Erreur API:", error.message);
  }
};