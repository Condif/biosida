import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../../src/Link";
import { Button, Container, Grid } from "@material-ui/core";
import { palette } from "@material-ui/system";
import {handleGoToBooking} from "components/helpers/handle-functions"
import { useRouter } from 'next/router'

const ReadMore = ({ readMoreInformation, setChosenMovie, movie }) => {
  const router = useRouter()
  return (
    <Grid
      item
      container
      xs
      style={{ background: "#E9ECF5", position: "relative" }}
    >
      <Box display="flex" flexDirection="row" my={2}>
        <Box mx={2} height="12rem" width="14rem" bgcolor="info.main"></Box>
        <Box mt={2} width="30rem">
          <Typography variant={"body1"} mt={4}>
            {readMoreInformation.description}
          </Typography>
        </Box>
      </Box>
      <Box position="absolute" style={{ bottom: 25, right: 50 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleGoToBooking(movie, setChosenMovie, router)}
        >
          Boka
        </Button>
      </Box>
    </Grid>
  );
};

export default ReadMore;
