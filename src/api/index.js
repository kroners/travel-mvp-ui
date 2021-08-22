import axios from "axios";

export const TRAVEL_API = 'http://localhost:8000'

export const TRAVEL_BASE_PATH = `${TRAVEL_API}/api/v1`;

export async function getDestinations(destino) {
  try {
    const destinationList = await axios.get(`${TRAVEL_BASE_PATH}/destinations/`, { destino });
    
    return destinationList.data;

  } catch (error) {
    console.log(error);  
  }
  return [];
}

export async function getAllPrograms() {
  try {
    const destinationList = await axios.get(`${TRAVEL_BASE_PATH}/programs/`);
    
    return destinationList.data;

  } catch (error) {
    console.log(error);  
  }
  return [];
};