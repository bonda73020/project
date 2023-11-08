import {IResType} from "../types/IResType";
import {IMoviePage} from "../interfaces/IMoviePage";
import {moviesAxiosService, posterAxiosService} from "./axiosService";
import {urls} from "../constants/urls";
import {IMovie} from "../interfaces/IMovie";
import {IGenre} from "../interfaces/IGenre";

const movieService = {

getPage:(page:string='1'):IResType<IMoviePage>=>moviesAxiosService.get(urls.moviesPage,{
    params:{page:page}
}),
    getGenres:():IResType<IGenre[]>=>moviesAxiosService.get(urls.genres)
}




export {
    movieService
}