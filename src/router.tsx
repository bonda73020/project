import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages/MoviesPage";
import {GenresPage} from "./pages/GenresPage";
import {SearchPage} from "./pages/SearchPage";
import {MoviePage} from "./pages/MoviePage";

const router = createBrowserRouter([
    {
        path:'',element:<MainLayout/>,children:[
            {index:true,element:<Navigate to={'movies'}/>},
            {path:'movies',element:<MoviesPage/>},
            {path:'movies/movieDetails',element:<MoviePage/>},
            {path:'genres',element:<GenresPage/>},
            {path:'search',element:<SearchPage/>},
        ]
    }
])


export {router}