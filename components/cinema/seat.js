import React, { useContext} from "react";
import { UserContext } from "context/userContext";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import styles from "./seat.module.css";

export default function Seat({ seat, setSelectedSeats, selectedSeats}) {
    const { chosenMovie, booking } = useContext(
        UserContext
      );
  const handleSelectedSeat = (seat) => {
    const tempSelectedSeats = [...selectedSeats];
    
    if (tempSelectedSeats.indexOf(seat) >= 0) {
      const index = tempSelectedSeats.indexOf(seat);
      tempSelectedSeats.splice(index, 1);
      setSelectedSeats(tempSelectedSeats);
      removeSelectedSeatFromDb(createTempReservedSeats());
    } else {
      tempSelectedSeats.push(seat);
      setSelectedSeats(tempSelectedSeats);
      
      addSelectedSeatsToDb(createTempReservedSeats());
    }
  };

  const createTempReservedSeats = () => {
    const tempReservedSeats = {};
    const tempBooking = booking;
    tempReservedSeats["time"] = tempBooking.start_time;
    const { id } = { ...chosenMovie };
    tempReservedSeats["movie_id"] = id;
    tempReservedSeats["date"] = tempBooking.date;
    tempReservedSeats["seats"] = [...selectedSeats];
    return tempReservedSeats
  }

  const addSelectedSeatsToDb = async (tempReservedSeats) => {
    if (selectedSeats?.length === 0) return;
    localStorage.setItem("reservedSeats", JSON.stringify(tempReservedSeats));
    await fetch("http://localhost:4005/reserve-seats", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempReservedSeats),
    }).then((res) => {
      console.log(res);
      res.json();
    });
  };
  const removeSelectedSeatFromDb = async (tempReservedSeats) => {
    if (selectedSeats?.length === 0) return;
    localStorage.setItem("reservedSeats", JSON.stringify(tempReservedSeats));
    await fetch("http://localhost:4005/unreserve-seats", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempReservedSeats),
    }).then((res) => {
      console.log(res);
      res.json();
    });
  };
  return (
    <EventSeatIcon
      className={
        selectedSeats.indexOf(seat) >= 0
          ? styles.eventSeatIconSelected
          : styles.eventSeatIcon
      }
      type="button"
      onClick={() => handleSelectedSeat(seat)}
      style={{ fontSize: 60 }}
    />
  );
}
