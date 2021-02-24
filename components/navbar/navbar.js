import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../../src/Link"
import styles from "./navbar.module.css";

export default function Index() {
  return (
    <Box
        height="5rem"
        justifyContent="flex-end"
        display="flex"
        alignItems="center"
        
    >
        <Box mr={3} >
        <Link href="/"> <span  className={"material-icons " + styles.houseIcon}>other_houses</span>
        </Link> 
        </Box>
    </Box>
  )
}
