import React, { useContext, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Box, Button } from "@material-ui/core";
import { UserContext } from "context/userContext";
import Seat from "components/cinema/seat";

export default function Cinema() {
  const { selectedSeats, setSelectedSeats } = useContext(
    UserContext
  );
  const [seats, setSeats] = useState([
    "R1-S1",
    "R1-S2",
    "R1-S3",
    "R1-S4",
    "R1-S5",
    "R1-S6",
    "R1-S7",
    "R1-S8",
    "R1-S9",
    "R2-S1",
    "R2-S2",
    "R2-S3",
    "R2-S4",
    "R2-S5",
    "R2-S6",
    "R2-S7",
    "R2-S8",
    "R2-S9",
    "R2-S10",
    "R3-S1",
    "R3-S2",
    "R3-S3",
    "R3-S4",
    "R3-S5",
    "R3-S6",
    "R3-S7",
    "R3-S8",
    "R3-S9",
    "R3-S10",
    "R4-S1",
    "R4-S2",
    "R4-S3",
    "R4-S4",
    "R4-S5",
    "R4-S6",
    "R4-S7",
    "R4-S8",
    "R4-S9",
    "R4-S10",
  ]);

  return (
    <Container maxWidth="md" spacing={2}>
      <Box
        my={2}
        style={{ backgroundColor: "grey" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" flexDirection="row">
          {seats.slice(0, 9).map((seat, index) => (
            <Box key={index} mx={"0.2rem"}>
              {" "}
              <Seat seat={seat} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}/>
            </Box>
          ))}
        </Box>

        <Box display="flex" flexDirection="row">
          {seats.slice(9, 19).map((seat, index) => (
            <Box key={index} mx={"0.2rem"}>
              {" "}
              <Seat seat={seat} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} />
            </Box>
          ))}
        </Box>
        <Box display="flex" flexDirection="row">
          {seats.slice(19, 29).map((seat, index) => (
            <Box key={index} mx={"0.2rem"}>
              {" "}
              <Seat seat={seat} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats} />
            </Box>
          ))}
        </Box>
        <Box display="flex" flexDirection="row">
          {seats.slice(29, 38).map((seat, index) => (
            <Box key={index} mx={"0.2rem"}>
              {" "}
              <Seat seat={seat} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}/>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
