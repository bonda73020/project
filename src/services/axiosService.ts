import axios from "axios";

import {moviesBaseURL, posterBaseURL, urls} from "../constants/urls";
import {token} from "../constants/token";



const headers = {
    Authorization: `Bearer ${token}`
}
const moviesAxiosService = axios.create({baseURL:moviesBaseURL,headers})
const posterAxiosService = axios.create({baseURL:posterBaseURL,headers})

export {
    moviesAxiosService,
    posterAxiosService
}