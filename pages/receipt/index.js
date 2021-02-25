import React, { useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import SimpleListMenu from "components/simple-menu";
import { UserContext } from "context/userContext";
import PriceCard from "components/price-card";
import { useRouter } from "next/router";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function Receipt() {
  return (
    <>
      <Container maxWidth="sm" >
        <Box display="flex" flexDirection="column" justifyContent="space-around" height="20rem" style={{ background: "white" }}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" style={{fontWeight: "600"}}>Tack för din bokning!</Typography>
          </Box>
          <Box height="10rem" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
            <Box display="flex" justifyContent="center"><CheckCircleOutlineIcon style={{ fontSize: 80, color:"#71C670"}}/></Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body2">Ditt bokningsnummer:</Typography>
                <Typography variant="h6">ba23sdf3sdf</Typography>
            </Box>
          </Box>
        </Box>
        <PriceCard priceCardAnchor="receipt"/>
        <Box display="flex" justifyContent="center" py={2} style={{background: "white"}}>
        <Typography variant="h6">Ladda ner som PDF</Typography>
        </Box>
      </Container>
    </>
  );
}
