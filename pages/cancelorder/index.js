import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  Button,
  InputLabel,
  Input,
} from "@material-ui/core";
import { useRouter } from "next/router";
export default function CancelOrder() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const cancelBookingHandler = () => {
    const response = deleteBooking();
    if(response.status === 204) {
      router.push("/cancelorderreceipt")
    } else {
      alert("Finns ingen order med det ordernumret");
    }
  };

  const deleteBooking = async () => {
    const response = await fetch("http://localhost:4005/booking/" + inputValue, {
      method: "DELETE",
    })
      .then((res) => {
        console.log(res);
        return res.json() 
      })
    return response
  };
  return (
    <Container
      maxWidth="sm"
      style={{
        backgroundColor: "white",
        padding: "2rem 0 2rem 0",
        marginTop: "3rem",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        height="20rem"
        style={{ background: "white" }}
      >
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            Ange din bokningskod för
          </Typography>
          <Typography variant="h4" style={{ fontWeight: "600" }}>
            föreställningen du vill avboka
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" my={4}>
          <Typography variant="h5" style={{ fontWeight: "600" }}>
            Bekräfta avbokning
          </Typography>
        </Box>
        <Box
          height="10rem"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <form noValidate autoComplete="off">
            <InputLabel htmlFor="my-input">Bokningskod</InputLabel>
            <Input
              // error={errors.bokningskod}
              value={inputValue || ""}
              id="bokningskod"
              aria-describedby="my-helper-text"
              onChange={(e) => handleInputChange(e.target.value)}
            />
            {/* <FormHelperText id="my-helper-text">
              {errors.bokningskodHelperText}
            </FormHelperText> */}
          </form>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <Button>Avbryt</Button>
            </Box>
            <Box>
              <Button
                onClick={() => cancelBookingHandler()}
                variant="contained"
                color="secondary"
                style={{ border: "1px solid black" }}
              >
                Avboka
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
