import React,{useContext} from "react";
import {Box, Button} from "@material-ui/core";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";
import {UserContext} from "context/userContext"

export default function Index() {
  const {setSelectedSeats} = useContext(UserContext)
  const router = useRouter()
  const goToHome = async () => {
    setSelectedSeats([])
    const reservedSeats = JSON.parse(localStorage.getItem('reservedSeats')) || null
    if(reservedSeats) {
      await fetch("http://localhost:4005/unreserve-seats", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify(reservedSeats),
      })
        .then((res) => {
          console.log(res);
          return res.json() 
        })
    }
    router.push("/")
  }
  return (
    <Box
        height="5rem"
        justifyContent="flex-end"
        display="flex"
        alignItems="center"
        
    >
        <Box mr={3} >
        <Button onClick={() => goToHome()}> <span  className={"material-icons " + styles.houseIcon}>other_houses</span>
        </Button> 
        </Box>
    </Box>
  )
}
