import axios from 'axios'

const baseUrl = 'http://localhost:5005'

export function getItinerary(itineraryId) {
    return axios.get(baseUrl + "/itinerary/"  + itineraryId)
  }

