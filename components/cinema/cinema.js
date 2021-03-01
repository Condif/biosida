import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { Box, Button, Typography } from "@material-ui/core";
import { UserContext } from "context/userContext";
import Seats from "components/cinema/seats";
import { useRouter } from "next/router";

export default function Cinema() {
  const router = useRouter();
  const { setBooking, booking, selectedSeats, setSelectedSeats } = useContext(
    UserContext
  );
  const handleNextClick = () => {
    const tempBooking = { ...booking };
    const tempSelectedSeats = [...selectedSeats];
    tempBooking["seats"] = tempSelectedSeats;

    setBooking(tempBooking);
    router.push("/userinformationstep");
  };

  const onUnload = (event) => {
    const reservedSeats = JSON.parse(localStorage.getItem("reservedSeats"));
    console.log(reservedSeats);

    fetch("http://localhost:4005/unreserve-seats", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(reservedSeats),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(() => {
        alert("page Refreshed");
        setSelectedSeats([]);
      });
  };

  useEffect(() => {
    window.addEventListener("beforeunload", onUnload);

    return () => {
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);

  return (
    <Container maxWidth="md" spacing={2} style={{ boxShadow: "5px 5px 5px" }}>
      <Box my={8} style={{ backgroundColor: "grey" }} height="1rem"></Box>
      <Seats />
      <Box
        display="flex"
        justifyContent="center"
        style={{ background: "#F4F4F4" }}
      >
        <Button
          fullWidth
          width="100%"
          disabled={selectedSeats.length === 0}
          onClick={() => handleNextClick()}
        >
          <Typography variant="h5">Nästa</Typography>
        </Button>
      </Box>
    </Container>
  );
}
