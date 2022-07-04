import { Container, MovieList, Movie } from "./styles";
import {useState} from 'react'

function Home(){


    

    const movies = [
        {
            id:1,
            title:'Spider Man',
            image_url:"https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg"
        },
        {
            id:2,
            title:'Batman',
            image_url:'https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg'
        },
        {
            id:3,
            title:'Avengers',
            image_url:'https://upload.wikimedia.org/wikipedia/pt/d/d2/Top_Gun_Maverick.jpg'
        }
    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map(movie =>{
                    return(
                        <Movie key={movie.id}>
                            <a href="https://google.com">
                            <img src={movie.image_url} alt=""/>
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;