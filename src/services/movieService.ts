import {IResType} from "../types/IResType";
import {IMoviePage} from "../interfaces/IMoviePage";
import {moviesAxiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovie} from "../interfaces/IMovie";
import {IGenre} from "../interfaces/IGenre";
import {ICredits} from "../interfaces/ICredits";

const movieService = {

getPage:(page:string='1',options:{sort_by:string,genres:string[]}):IResType<IMoviePage>=>moviesAxiosService.get(urls.moviesPage,{
    params:{page:page,sort_by:options.sort_by,with_genres:options.genres.join(',')}
}),
    getGenres:():IResType<{genres:IGenre[]}>=>moviesAxiosService.get(urls.genres),
    getMovieById:(id:string):IResType<IMovie>=>moviesAxiosService.get(urls.movieById(id)),
    getCreditsById:(id:string):IResType<ICredits>=>moviesAxiosService.get(urls.creditsById(id)),
    searchByWords:(keyWords:string[],page:string):IResType<IMoviePage>=>moviesAxiosService.get(urls.search,{params:{page:page,query:keyWords.join(' ')}})
}




export {
    movieService
}