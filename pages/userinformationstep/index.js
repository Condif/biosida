import React, { useContext, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import PriceCard from "components/price-card";
import UserForm from "components/userForm";
import { Box, Button, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { UserContext } from "context/userContext";

export default function UserInformationStep() {
  const { setBooking, booking, chosenMovie } = useContext(UserContext);
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});

  const handleInputChange = (value, anchor) => {
    validate(anchor);
    setValues({
      ...values,
      [anchor]: value,
    });
  };
  const validate = (anchor) => {
    let temp = {};
    if (anchor === "fullname" || anchor === "checkAll") {
      temp.fullNameHelperText =
        values.fullName?.length >= 4 ? "" : "Ange ditt för och efternamn.";
      temp.fullName = values.fullName?.length >= 4 ? false : true;
    }
    if (anchor === "email" || anchor === "checkAll") {
      temp.emailHelperText =
        values.email?.length >= 4 ? "" : "Ange en email adress.";
      temp.email = values.email?.length >= 4 ? false : true;
    }
    if (anchor === "mobile" || anchor === "checkAll") {
      temp.mobileHelperText =
        !values.mobile || values.mobile?.length >= 9
          ? ""
          : "Skriv in minst 9 siffror eller lämna fältet tomt";
      temp.mobile = !values.mobile || values.mobile?.length >= 9 ? false : true;
    }

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleBookingClick = () => {
    if (validate("checkAll")) {
      const tempBooking = { ...booking };
      const tempValues = { ...values };

      tempBooking["fullName"] = tempValues.fullName;
      tempBooking["email"] = tempValues.email;
      tempBooking["mobile"] = tempValues.mobile || "";
      tempBooking["movie_id"] = chosenMovie.id;
      setBooking(tempBooking);
      setBookingAdded(true);
    }
  };

  const [bookingAdded, setBookingAdded] = useState(false);

  useEffect(() => {
    if (bookingAdded) {
      addBookingToApi();
      router.push("/receipt")
    }
  }, [bookingAdded]);
  const addBookingToApi = async () => {
    await fetch("http://localhost:4005/booking/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(booking),
      
    })
      .then((res) => {
        res.json()
      })
  };

  return (
    <Container
      maxWidth="md"
      style={{ boxShadow: "5px 5px 5px", padding: "2rem 0 2rem 0" }}
    >
      <Container maxWidth="sm" spacing={2}>
        <PriceCard priceCardAnchor="userinformationstep"></PriceCard>
        <UserForm
          values={values}
          handleInputChange={handleInputChange}
          errors={errors}
          setErrors={setErrors}
          validate={validate}
        />
        <Box display="flex" justifyContent="center">
          <Box
            mt={2}
            width="15rem"
            display="flex"
            justifyContent="center"
            style={{ background: "#F4F4F4" }}
          >
            <Button fullWidth onClick={() => handleBookingClick()}>
              <Typography variant="h5">Boka</Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
