import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [chosenMovie, setChosenMovie] = useState({});
  const [booking, setBooking] = useState({});
  const [datesIndex, setDatesIndex] = useState(0);
  const [showTimeIndex, setShowTimeIndex] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <UserContext.Provider
      value={{
        movies,
        setMovies,
        setChosenMovie,
        chosenMovie,
        setBooking,
        booking,
        showTimeIndex,
        setShowTimeIndex,
        datesIndex,
        setDatesIndex,
        selectedSeats,
        setSelectedSeats,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
