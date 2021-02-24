import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
      flexDirection: "column",
    },
  },
}));
export default function UserForm({
  handleInputChange,
  errors,
  setErrors,
  values,
}) {

  const classes = useStyles();
  return (
    <Container
      maxWidth="xs"
      style={{
        backgroundColor: "#E9ECF5",
        padding: "2rem 0 2rem 0",
        marginTop: "3rem",
      }}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="my-input">Namn</InputLabel>
          <Input
            error={errors.fullName}
            value={values.fullName || ""}
            id="namn"
            aria-describedby="my-helper-text"
            onChange={(e) => handleInputChange(e.target.value, "fullName")}
          />
          <FormHelperText id="my-helper-text">
            {errors.fullNameHelperText}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Email adress</InputLabel>
          <Input
            error={errors.email}
            value={values.email || ""}
            id="email"
            aria-describedby="my-helper-text"
            onChange={(e) => handleInputChange(e.target.value, "email")}
          />
          <FormHelperText id="my-helper-text">
            {errors.emailHelperText}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Telefon</InputLabel>
          <Input
            value={values.mobile || ""}
            error={errors.mobile}
            id="mobile"
            aria-describedby="my-helper-text"
            onChange={(e) => handleInputChange(e.target.value, "mobile")}
          />
          <FormHelperText id="my-helper-text">
            {errors.mobileHelperText}
          </FormHelperText>
        </FormControl>
      </form>
    </Container>
  );
}
