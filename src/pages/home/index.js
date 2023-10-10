import React, { useState } from 'react';
import { useEffect } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.results);
            });
    }, [KEY]);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const filteredMovies = selectedCategory
        ? movies.filter(movie => movie.genre_ids.includes(selectedCategory))
        : movies;

    return (
        <div>
            <header style={{ backgroundColor: '#fff', padding: '1rem', textAlign: 'left', marginBottom: '2rem' }}>
                <h1 style={{ color: '#000', fontSize: '2em', margin: '0' }}>Bem-vindo ao Movies</h1>
                <p style={{ color: '#000', fontSize: '1.2em', marginTop: '0.5rem' }}>Descubra os filmes mais populares!</p>
            </header>
            <hr style={{ borderTop: '1px solid black', backgroundColor: 'black', height: '1px', margin: '2rem 0' }} />
            <Container>
                <h1>Filmes em destaque</h1>
                <div style={{ marginBottom: '1rem' }}>
                    <Btn onClick={() => handleCategorySelect(null)}>Todos</Btn>
                    <Btn onClick={() => handleCategorySelect(28)}>Ação</Btn>
                    <Btn onClick={() => handleCategorySelect(12)}>Aventura</Btn>
                    <Btn onClick={() => handleCategorySelect(18)}>Drama</Btn>
                    <Btn onClick={() => handleCategorySelect(16)}>Animação</Btn>
                    <Btn onClick={() => handleCategorySelect(35)}>Comédia</Btn>
                  
                </div>
                <MovieList>
                    {filteredMovies.map((movie) => {
                        return (
                            <Movie key={movie.id}>
                                <img
                                    src={`${imagePath}${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <span>{movie.title}</span>

                                <Link to={`/${movie.id}`}>
                                    <Btn>Detalhes</Btn>
                                </Link>
                            </Movie>
                        );
                    })}
                </MovieList>
            </Container>
        </div>
    );
}

export default Home;
