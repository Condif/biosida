import React, {useState} from "react"
import {Typography, Container, Box} from "@material-ui/core"
import Link from "src/Link"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
export default function CancelOrderReceipt () {
    return (
        <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" justifyContent="space-around" height="20rem" style={{ background: "white" }}>
          <Box display="flex" alignItems="center" flexDirection="column">
            <Typography variant="h4" style={{fontWeight: "600"}}>Föreställningen är nu avbokad!</Typography>
            <Typography variant="h4" style={{fontWeight: "600"}}>Välkommen åter</Typography>
          </Box>
          <Box height="10rem" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
            <Box display="flex" justifyContent="center"><CheckCircleOutlineIcon style={{ fontSize: 80, color:"#71C670"}}/></Box>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Box component={Link} naked href="/"><Typography variant="h6">Tillbaka till startsidan</Typography></Box>
            </Box>
          </Box>
        </Box>
        </Container>
    )
}