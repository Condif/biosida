import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import SimpleListMenu from "components/simple-menu";
import { UserContext } from "context/userContext";
import PriceCard from "components/price-card";
import { useRouter } from 'next/router'


export default function TimeAndPlace() {
  const router = useRouter()
  const { chosenMovie, showTimeIndex, datesIndex, setBooking, booking } = useContext(
    UserContext
  );
  const handleNextClick = () => {
    const tempChosenMovie = { ...chosenMovie };
    const tempBooking = { ...booking };
    const tempDate = tempChosenMovie.dates?.[datesIndex];
    tempBooking["date"] = tempDate;
    const tempStartTime = tempChosenMovie.shows?.[showTimeIndex].startTime;
    const tempEndTime = tempChosenMovie.shows?.[showTimeIndex].endTime;
    tempBooking["start_time"] = tempStartTime;
    tempBooking["end_time"] = tempEndTime;
    setBooking(tempBooking);
    router.push("/chooseseats")
  };
  return (
    <Container maxWidth="sm" spacing={2} style={{boxShadow: "5px 5px 5px", padding: "2rem 0 2rem 0"}}>
      <PriceCard priceCardAnchor="time_and_date"></PriceCard>
      <Box>
        <SimpleListMenu menuAnchor="dates" chosenMovie={chosenMovie} />
        <SimpleListMenu menuAnchor="shows" chosenMovie={chosenMovie} />
      </Box>
      <Box display="flex" justifyContent="center"  style={{background: "#F4F4F4"}}>
        <Button fullWidth onClick={() => handleNextClick()}>
          <Typography variant="h5">Nästa</Typography>
        </Button>
      </Box>
    </Container>
  );
}
