import React, { useState, useEffect, useContext } from "react";
// import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Link from "../../src/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./movie-grid.module.css";
import ReadMore from "../readmore/read-more";
import MovieRow from "../movie-row";
import {UserContext} from "../../context/userContext"
//Breakpoints
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 960px
// lg, large: 1280px
// xl, extra-large: 1920px

// Spacing
// m - for classes that set margin
// p - for classes that set padding
// Where sides is one of:

// t - for classes that set margin-top or padding-top
// b - for classes that set margin-bottom or padding-bottom
// l - for classes that set margin-left or padding-left
// r - for classes that set margin-right or padding-right
// x - for classes that set both *-left and *-right
// y - for classes that set both *-top and *-bottom

// Fontsizes material ui

// Typography: 14px
// h1 6rem = 92px
// h2 3.75rem
// h3 3rem = 48px
// h4 2.125rem
// h5 1.5rem
// h6 1.6rem
// subtitle1: 1rem
// subtitle2: 0.875rem
// body1: 1rem
// body2: 0.875rem

const MovieGrid = () => {
  const {movies} = useContext(UserContext)
  
  const [readMore, setReadMore] = useState([]);
  const getReadMore = () => {
    fetch("readmore.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setReadMore(myJson.readMore);
      });
  };
 
  useEffect(() => {
    getReadMore();
  },[])

  return (
    <Grid container maxwidth="lg" spacing={2}>
      <Grid item container xs={12}>
        <MovieRow
          movieSlicingEndIndex={4}
          movies={movies}
          readMore={readMore}
          setReadMore={setReadMore}
          movieSlicingStartIndex={0}
        />
      </Grid>
      <Grid item container xs={12}>
        <MovieRow
          movieSlicingEndIndex={8}
          movies={movies}
          readMore={readMore}
          setReadMore={setReadMore}
          movieSlicingStartIndex={4}
        />
      </Grid>
      <Grid item container xs={12}>
        <MovieRow
          movieSlicingEndIndex={12}
          movies={movies}
          readMore={readMore}
          setReadMore={setReadMore}
          movieSlicingStartIndex={8}
        />
      </Grid>
    </Grid>
  );
};

export default MovieGrid;
