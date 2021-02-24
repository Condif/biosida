import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import { UserContext } from "context/userContext";
const PriceCard = ({ priceCardAnchor }) => {
  const { chosenMovie, selectedIndex, setBooking, booking } = useContext(
    UserContext
  );
  return (
    <>
      {/* Dots */}
      <Grid
        container
        spacing={2}
        display="flex"
        justify="center"
        align="center"
        border="1px solid black"
        style={{ margin: "1rem 0 1rem 0" }}
      >
        <Grid item>
          <Box
            borderRadius="50%"
            height="2rem"
            width="2rem"
            style={{ backgroundColor: "#6E6E6E" }}
          ></Box>
        </Grid>
        <Grid item>
          <Box
            borderRadius="50%"
            height="2rem"
            width="2rem"
            style={{ backgroundColor: "#6E6E6E" }}
          ></Box>
        </Grid>
        <Grid item>
          {priceCardAnchor === "time_and_date" ? (
            <Box
              borderRadius="50%"
              height="2rem"
              width="2rem"
              style={{ backgroundColor: "#E0E8EA90" }}
            ></Box>
          ) : (
            <Box
              borderRadius="50%"
              height="2rem"
              width="2rem"
              style={{ backgroundColor: "#6E6E6E" }}
            ></Box>
          )}
        </Grid>
        <Grid item>
          {priceCardAnchor === "userinformationstep" ? (
            <Box
              borderRadius="50%"
              height="2rem"
              width="2rem"
              style={{ backgroundColor: "#6E6E6E" }}
            ></Box>
          ) : (
            <Box
              borderRadius="50%"
              height="2rem"
              width="2rem"
              style={{ backgroundColor: "#E0E8EA90" }}
            ></Box>
          )}
        </Grid>
      </Grid>
      {/* Greycard */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#E0E8EA90" }}
        py={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="80%"
          borderBottom="0.5px solid black"
          mb={1}
        >
          <Box display="flex" justifyContent="space-between" mb={1}>
            <Box pl={2}>
              <Typography variant="body2">{chosenMovie.title}</Typography>
            </Box>
            <Box pr={2}>
              <Typography variant="body2">
                {chosenMovie.price + " :-"}
              </Typography>
            </Box>
          </Box>
          {priceCardAnchor !== "time_and_date" && (
            <Box display="flex" ml={2} flexDirection="column" mb={1}>
              <Box display="flex" justifyContent="space-between">
                <Box ml={3}>
                  <Typography variant="caption">Valt datum</Typography>
                </Box>
                <Box mr={3}>
                  <Typography variant="caption">{booking.date}</Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box ml={3}>
                  <Typography variant="caption">Vald föreställning</Typography>
                </Box>
                <Box mr={3}>
                  <Typography variant="caption">
                    {booking.start_time + " - " + booking.end_time}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        <Box display="flex" justifyContent="space-between" width="80%" mb={1}>
          <Box pl={2}>
            <Typography variant="subtitle2">TOTAL</Typography>
          </Box>
          <Box pr={2}>
            <Typography variant="subtitle2">
              {chosenMovie.price + " :-"}
            </Typography>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
};

export default PriceCard;
