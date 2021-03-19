import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.table(movie);



    return (
        <header className="banner"
        style = {{
            backgroundSize : "cover",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
        }}
        > {/* bacground image */}
        <div className="banner_contents">
            {/* title */}
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            {/* div > 2 buttons play and mylist*/}
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
             
            {/* description */}
            <h1 className="banner_description">{movie?.overview}</h1>  
            
        </div>
        <div className="banner_fadeBottom"></div>
        </header>
    )
}

export default Banner
