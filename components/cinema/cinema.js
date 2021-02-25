import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { Box, Button, Typography} from "@material-ui/core";
import { UserContext } from "context/userContext";
import Seats from "components/cinema/seats"
import Link from "src/Link"
import { useRouter } from 'next/router'

export default function Cinema() {
  const router = useRouter()
  const { chosenMovie, selectedIndex, setBooking, booking, selectedSeats, setSelectedSeats } = useContext(
    UserContext
  );
  const handleNextClick = () => {
    const tempBooking = {...booking}
    const tempSelectedSeats = [...selectedSeats];
    tempBooking["seats"] = tempSelectedSeats;
    
    setBooking(tempBooking);
    router.push("/userinformationstep")
  }
  return (
    <Container maxWidth="md" spacing={2} style={{boxShadow: "5px 5px 5px"}}>
        <Box my={8} style={{backgroundColor: "grey"}} height="1rem" ></Box>
        <Seats/>
        <Box fullWidth display="flex" justifyContent="center" style={{background: "#F4F4F4"}}>
        <Button fullWidth width="100%" disabled={selectedSeats.length === 0} onClick={() => handleNextClick()}>
          <Typography variant="h5">Nästa</Typography>
        </Button>
      </Box>
    </Container>
  );
}
