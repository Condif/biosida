import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import PriceCard from "components/price-card";
import Cinema from "components/cinema/cinema";

export default function ChooseSeats() {
  return (
    <Container maxWidth="md" style={{boxShadow: "5px 5px 5px", padding: "2rem 0 2rem 0"}}>
      <Container maxWidth="sm" spacing={2}>
        <PriceCard priceCardAnchor="choose_seats"></PriceCard>
      </Container>
      <Cinema />
    </Container>
  );
}
