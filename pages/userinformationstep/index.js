import React, { useContext, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import PriceCard from "components/price-card";
import UserForm from "components/userForm";
import { Box, Button, Typography } from "@material-ui/core";
import { useRouter } from "next/router";

export default function ChooseSeats() {
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
      temp.fullNameHelperText = values.fullName?.length >= 4
        ? ""
        : "Ange ditt för och efternamn.";
      temp.fullName = values.fullName?.length >= 4 ? false : true;
    }
    if (anchor === "email" || anchor === "checkAll") {
      temp.emailHelperText = values.email?.length >= 4
        ? ""
        : "Ange en email adress.";
      temp.email = values.email?.length >= 4 ? false : true;
    }

    if (anchor === "mobile" || anchor === "checkAll") {
      temp.mobileHelperText =
        values.mobile?.length === 0 || values.mobile?.length >= 9 ? "" : "Skriv in minst 10 siffror eller lämna fältet tomt";
      temp.mobile = values.mobile?.length === 0 || values.mobile?.length >= 9 ? false : true;
    }

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleBookingClick = () => {
    if (validate("checkAll")) {
      router.push("/receipt")
    }
  };

  return (
    <Container maxWidth="md">
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
          <Button onClick={() => handleBookingClick()}>
            <Typography variant="h5">Boka</Typography>
          </Button>
        </Box>
      </Container>
    </Container>
  );
}
