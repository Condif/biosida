import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import { Box, Button, Typography } from "@material-ui/core";
import { UserContext } from "context/userContext";
import EventSeatIcon from '@material-ui/icons/EventSeat';
import styles from "./seat.module.css"

export default function Seat({seat, setSelectedSeats, selectedSeats}) { 
    
    const handleSelectedSeat = (seat) => {
        const tempSelectedSeats = [...selectedSeats]
        if(tempSelectedSeats.indexOf(seat) >= 0) {
            const index = tempSelectedSeats.indexOf(seat)
            tempSelectedSeats.splice(index, 1)
        } else {
            tempSelectedSeats.push(seat)
        }
        setSelectedSeats(tempSelectedSeats)
    }
    return (
        <EventSeatIcon className={selectedSeats.indexOf(seat) >= 0 ? styles.eventSeatIconSelected : styles.eventSeatIcon} type="button" onClick={() => handleSelectedSeat(seat)} style={{ fontSize: 60 }}/>
    )

}

