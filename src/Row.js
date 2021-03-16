import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    /** state i like a memory to store something.
     * when we refresh it disappears.
     * it is basically way to write variables in react
     */

    // A snippet of code which runs based on a specific condition
    useEffect(()=>{
        // if [] , run once when row laods, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    // we are using a variavles which is being passed outside 
    // of the block so we will have to tell useeffect will know
    // so useeffecgt know that something changed so it will have to refile the code 
 
    console.table(movies);


    /**useEffect(()=>{
        // if [movies] , run when row laods, and run everytime when movies changes
    },[movies]);
    */
    
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
            { /* several row posters*/}

            {movies.map(movie => (
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} // STring concatination
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
            ))}
            </div>
        </div>
    )
}

export default Row
