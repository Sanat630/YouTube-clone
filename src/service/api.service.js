import axios from "axios";

const BASE_URI = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'd1116ec51bmsh0264f7083cfffd3p158d86jsna0da914734a7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    }
};

// async await 
// promise

export const ApiService = {
    async fetching (url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    },
}