import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./moviegrid/movie-grid.module.css";
import ReadMore from "./readmore/read-more";
import {UserContext} from "../context/userContext"
import { useRouter } from 'next/router'
import {handleGoToBooking} from "components/helpers/handle-functions"

const MovieRow = (props) => {
  const router = useRouter()
  const {
    movies,
    readMore,
    movieSlicingEndIndex,
    movieSlicingStartIndex,
  } = props;
  const {setChosenMovie} = useContext(UserContext)
  const [readMoreOpen, setReadMoreOpen] = useState("");
  const handleOpenReadMore = (movie) => {
    if (readMoreOpen === "") {
      setReadMoreOpen(movie.id);
    } else if (readMoreOpen !== movie.id) {
      setReadMoreOpen(movie.id);
    } else {
      setReadMoreOpen("");
    }
  };


  return (
    <Grid container maxwidth="lg" spacing={1}>
      {movies
        .slice(movieSlicingStartIndex, movieSlicingEndIndex)
        .map((movie, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={index} mb={4} >
              <Paper  className={styles.paper1} style={{backgroundColor: "#283F49"}}>
                <Box height="3rem" >
                  <Typography
                    className={styles.typography}
                    variant={"h5"}
                    gutterBottom
                  >
                    {movie.title}
                  </Typography>
                </Box>
                <Box
                  marginLeft="1rem"
                  display="flex"
                  flexDirection="column"
                  position="absolute"
                  bottom="10px"
                >
                  <Button
                    className={styles.button}
                    variant="contained"
                    color="primary"
                    onClick={() => handleGoToBooking(movie, setChosenMovie, router)}
                  >
                    Boka
                  </Button>
                  <Button onClick={() => handleOpenReadMore(movie)}>
                    Läs mer
                  </Button>
                </Box>
              </Paper>
            </Grid>
          );
        })}
      {movies.map((movie, index) => {
        return (
          readMoreOpen === movie.id && (
            <Grid key={index} item container xs direction="row" xs={12}>
              <ReadMore readMoreInformation={movie} setChosenMovie={setChosenMovie} movie={movie}/>
            </Grid>
          )
        );
      })}
    </Grid>
  );
};

export default MovieRow;
