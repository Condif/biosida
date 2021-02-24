import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import PriceCard from "components/price-card";
import Cinema from "components/cinema/cinema";

export default function ChooseSeats() {
  return (
    <Container maxWidth="md">
      <Container maxWidth="sm" spacing={2}>
        <PriceCard priceCardAnchor="choose_seats"></PriceCard>
      </Container>
      <Cinema />
    </Container>
  );
}
