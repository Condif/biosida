import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const UserContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [chosenMovie, setChosenMovie] = useState({});
  const [booking, setBooking] = useState({})
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log(chosenMovie);
  },[chosenMovie])

  return (
    <UserContext.Provider value={{movies, setMovies, setChosenMovie, chosenMovie, setBooking, booking, selectedIndex, setSelectedIndex}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
