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
      {priceCardAnchor === "receipt" ? null : (
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
                style={{ backgroundColor: "#D8D8D8" }}
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
                style={{ backgroundColor: "#D8D8D8" }}
              ></Box>
            )}
          </Grid>
        </Grid>
      )}
      {/* Greycard */}
      {
        (chosenMovie?.title,
        chosenMovie?.price ? (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            style={{ backgroundColor: "#F4F4F4" }}
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
              {
                (priceCardAnchor !== "time_and_date",
                booking?.start_time,
                booking?.end_time && (
                  <Box display="flex" ml={2} flexDirection="column" mb={1}>
                    <Box display="flex" justifyContent="space-between">
                      <Box ml={3}>
                        <Typography variant="caption">Valt datum</Typography>
                      </Box>
                      <Box mr={3}>
                        <Typography variant="caption">
                          {booking.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                      <Box ml={3}>
                        <Typography variant="caption">
                          Vald föreställning
                        </Typography>
                      </Box>
                      <Box mr={3}>
                        <Typography variant="caption">
                          {booking.start_time + " - " + booking.end_time}
                        </Typography>
                      </Box>
                    </Box>
                    {booking?.seats && (
                      <Box display="flex" justifyContent="space-between">
                        <Box ml={3}>
                          <Typography variant="caption">Platser:</Typography>{" "}
                          {booking.seats.map((seat, index) => (
                            <Typography key={index} variant="caption">
                              {booking.seats.length !== index + 1
                                ? seat + ", "
                                : seat}
                            </Typography>
                          ))}
                        </Box>
                        <Box mr={3}>
                          <Typography variant="caption">
                            {"x" + booking.seats.length}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                ))
              }
              {priceCardAnchor === "receipt" && <Box>
                <Box pl={2}>
                  <Typography variant="body2">{booking.fullName}</Typography>
                </Box>
                <Box pl={2}>
                  <Typography variant="body2">{booking.email}</Typography>
                </Box>
                <Box pl={2}>
                  <Typography variant="body2">{booking.mobile}</Typography>
                </Box>
              </Box> }
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              width="80%"
              mb={1}
            >
              <Box pl={2}>
                <Typography variant="subtitle2">TOTAL</Typography>
              </Box>
              <Box pr={2}>
                <Typography variant="subtitle2">
                  {priceCardAnchor === "userinformationstep" || priceCardAnchor === "receipt"
                    ? chosenMovie.price * booking.seats?.length + " :-"
                    : chosenMovie.price + " :-"}
                </Typography>
              </Box>
            </Box>
          </Box>
        ) : null)
      }
    </>
  );
};

export default PriceCard;
