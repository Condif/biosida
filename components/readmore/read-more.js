import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../../src/Link";
import { Button, Container, Grid } from "@material-ui/core";
import { palette } from "@material-ui/system";
import { handleGoToBooking } from "components/helpers/handle-functions";
import { useRouter } from "next/router";
import Image from "next/image";

const ReadMore = ({ readMoreInformation, setChosenMovie, movie }) => {
  const router = useRouter();
  return (
    <Grid
      item
      container
      xs
      style={{
        background: "#141414",
        position: "relative",
        boxShadow: "5px 5px 5px",
      }}
    >
      <Box display="flex" flexDirection="row" my={2}>
        <Box mx={2} height="12rem" width="14rem">
          <Image
            src="/pirate.jpg"
            alt="Picture of the author"
            width={284}
            height={220}
          />
        </Box>
        <Box mt={2} width="30rem">
          <Typography variant={"body1"} style={{ color: "white" }} mt={4}>
            {readMoreInformation.description}
          </Typography>
        </Box>
      </Box>
      <Box position="absolute" style={{ bottom: 25, right: 50 }}>
        <Button
          variant="contained"
          style={{
            background: "none",
            color: "white",
            border: "1px solid white",
          }}
          onClick={() => handleGoToBooking(movie, setChosenMovie, router)}
        >
          Boka
        </Button>
      </Box>
    </Grid>
  );
};

export default ReadMore;
