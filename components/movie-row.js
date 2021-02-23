import React, { useState, useEffect, useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./moviegrid/movie-grid.module.css";
import ReadMore from "./readmore/read-more";
import Link from "../src/Link";
import {UserContext} from "../context/userContext"

const MovieRow = (props) => {
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

  const handleGoToBooking = (movie) => {
    const temp = {...movie}
    setChosenMovie(temp)
  }

  return (
    <Grid container maxwidth="lg" spacing={1}>
      {movies
        .slice(movieSlicingStartIndex, movieSlicingEndIndex)
        .map((movie, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={index} mb={4}>
              <Paper className={styles.paper1}>
                <Box height="3rem">
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
                    onClick={() => handleGoToBooking(movie)}
                    component={Link}
                    naked
                    href="/timeandplace"
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
      {readMore.map((item, index) => {
        return (
          readMoreOpen === item.parentId && (
            <Grid key={index} item container xs direction="row" xs={12}>
              <ReadMore readMoreInformation={item}/>
            </Grid>
          )
        );
      })}
    </Grid>
  );
};

export default MovieRow;
