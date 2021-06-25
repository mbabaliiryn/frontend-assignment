import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={IMG_API + poster_path} alt={title}/>
        <div className="movie-info">
            <h3>{title}</h3>
            <p className="vote">{vote_average}</p>
            
        </div>
        <div className="movie-over">
            <h2>overview:</h2>
            <p>{overview}</p>
           

        </div>
    </div>
);

export default Movie;
