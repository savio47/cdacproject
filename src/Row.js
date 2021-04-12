import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
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
    // we are using a variables which is being passed outside 
    // of the block so we will have to tell useeffect will know
    // so useeffecgt know that something changed so it will have to refile the code 
 
    console.table(movies);

    const opts = {
        height: "390",
        width: "100%",
        playerVars:{
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    /**useEffect(()=>{
        // if [movies] , run when row laods, and run everytime when movies changes
    },[movies]);
    */
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "")
            .then(url => {
                
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error));

        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
            { /* several row posters*/}

            {movies.map(movie => (
                ((isLargeRow && movie.poster_path) ||
                (!isLargeRow && movie.backdrop_path)) && (
                <img 
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`} // String concatination
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
            ))

            )}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
