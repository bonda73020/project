import {movieService} from "../services/movieService";

const moviesBaseURL = 'https://api.themoviedb.org'
const posterBaseURL = "https://image.tmdb.org/t/p/w500"

const moviesPage = '/3/discover/movie'

const genres = "/3/genre/movie/list"

const urls = {
    moviesPage:moviesPage,
    movieById:(id:string):string=>`${moviesPage}/${id}`,
    genres:genres
}


export {
    moviesBaseURL,
    posterBaseURL,
    urls
}