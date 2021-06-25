import React, { useEffect, useState } from "react";

import Movie from "./Movie";
import logo from "./timescale.png";


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7315ec59ea2264da1fa4f4eb8d647853&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=7315ec59ea2264da1fa4f4eb8d647853&query=";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		getMovies(FEATURED_API);
	}, []);

	const getMovies = (API) => {
		fetch(API)
		.then((res) => res.json())
		.then((data) => {
			setMovies(data.results);
		})
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		if(setSearchTerm){
		getMovies(SEARCH_API + searchTerm);
		setSearchTerm("");
	}
	};

	const handleOnChange = (e) => {
		setSearchTerm(e.target.value);
	}

	return (
		<>
			<header>

				<div className="logo">
					<img className="logo-image" src={logo} alt="title"/>
					<span>Timescale</span>
				</div>
			
				<form onSubmit={handleOnSubmit} className="icon">
				<input className="search" 
				
				type="search" placeholder="search for a movie"
				value={searchTerm}
				onChange={e=>handleOnChange(e)}
				

				/>
				<i class="fas fa-search"></i>
				
				</form>
			</header>
			<div className="movie-heading"><p>Most Recent Movies</p></div>
		
		<div className="movie-container">
			
			{movies.length > 0 && movies.map((movie) => 
			<Movie key={movie.id} {...movie} />)}
				
		</div>
		</>
	)
}
export default App;
