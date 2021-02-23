import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import SimpleListMenu from "components/simple-menu";
import { UserContext } from "context/userContext";
import Link from "src/Link";
import PriceCard from "components/price-card";

export default function TimeAndPlace() {
  const { chosenMovie, selectedIndex, setBooking, booking } = useContext(
    UserContext
  );
  const handleNextClick = () => {
    const tempChosenMovie = { ...chosenMovie };
    const tempBooking = { ...booking };
    const tempDate = tempChosenMovie.dates?.[selectedIndex];
    tempBooking["date"] = tempDate;
    const tempStartTime = tempChosenMovie.shows?.[selectedIndex].startTime;
    const tempEndTime = tempChosenMovie.shows?.[selectedIndex].endTime;
    tempBooking["start_time"] = tempStartTime;
    tempBooking["end_time"] = tempEndTime;
    setBooking(tempBooking);
  };

  useEffect(() => {
    console.log(booking);
  }, [booking]);
  return (
    <Container maxWidth="sm" spacing={2}>
      <PriceCard priceCardAnchor="time_and_place"></PriceCard>
      <Box>
        <SimpleListMenu menuAnchor="dates" chosenMovie={chosenMovie} />
        <SimpleListMenu menuAnchor="shows" chosenMovie={chosenMovie} />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button onClick={() => handleNextClick()} component={Link} href={"/chooseseats"}>
          <Typography variant="h5">Nästa</Typography>
        </Button>
      </Box>
    </Container>
  );
}
