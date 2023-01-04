const BASE_URL_API ='https://travelblissbackend-production.up.railway.app/api'
import axios from 'axios'

// get data from api helper functions
module.exports.getApiData = async(url) => {
    let response = await axios.get(BASE_URL_API + url)
    if (response) {
        return response;
    }
}