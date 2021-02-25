import React, { useState, useEffect, useContext } from "react";
import MovieGrid from "components/moviegrid/movie-grid"
import { Container, Box } from "@material-ui/core";
import {UserContext} from "context/userContext"

export default function Browser(props) {
  const {setMovies} = useContext(UserContext)

  useEffect(() => {
    setMovies(props.movies)
  }, [])
  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="center" mt={20}>
        <MovieGrid />
      </Box>
    </Container>
  );
}

export async function getStaticProps(context) {
  const movies = await fetch("http://localhost:4005/movies", {
  })
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      return myJson
    });

  //   const movies = await fetch("http://localhost:4005/movies", {
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((myJson) => {
  //     const movieRespons = myJson
  //     return {props:{movies: movieRespons}}
  //   });

    return {props: {movies: movies}}
}
