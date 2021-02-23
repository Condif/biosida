import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {Button } from "@material-ui/core"
import Link from "../src/Link";
import styles from "./index.module.css";

export default function Index() {
  return (
    <div className={styles.index}>
      <Box
        width="20rem"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box text-align="center" display="flex" mb={4}>
          <Typography style={{color: "white", fontWeight: "400"}} variant="h2">Välkommen</Typography>
        </Box>
        <Box text-align="center" display="flex" flexDirection="column">
          <Button style={{color: "white", border: "white solid 1px", margin: "1rem"}} size="large" component={Link} naked href="/browser" width="30rem">Börja din bokning</Button>
          <Button style={{color: "white"}} size="small" component={Link} naked href="/cancel">Avboka</Button>
        </Box>
      </Box>
    </div>
  );
}
