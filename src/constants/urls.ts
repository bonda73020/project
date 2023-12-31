const moviesBaseURL = 'https://api.themoviedb.org'
const posterBaseURL = "https://image.tmdb.org/t/p/w500"

const moviesPage = '/3/discover/movie'

const genres = "/3/genre/movie/list"

const findByIdPage = '3/movie'
const credits = '/credits'
const search = '3/search/movie'
const urls = {
    moviesPage:moviesPage,
    movieById:(id:string):string=>`${findByIdPage}/${id}`,
    genres:genres,
    creditsById:(id:string):string=>`${findByIdPage}/${id}/${credits}`,
    search:search
}


export {
    moviesBaseURL,
    posterBaseURL,
    urls
}