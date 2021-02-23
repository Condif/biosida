import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import SimpleListMenu from "components/simple-menu";
import { UserContext } from "context/userContext";
import Link from "src/Link";
import PriceCard from "components/price-card";

export default function ChooseSeats() {
  const { chosenMovie, selectedIndex, setBooking, booking } = useContext(
    UserContext
  );
  console.log(booking);
  return (
    <Container maxWidth="sm" spacing={2}>
      <PriceCard priceCardAnchor="choose_seats"></PriceCard>
    </Container>
  );
}
