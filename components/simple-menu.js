import React, {useContext, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import {UserContext} from "context/userContext"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleListMenu(props) {
  const { chosenMovie, menuAnchor } = props;
  const {booking, selectedIndex, setSelectedIndex} = useContext(UserContext)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          {menuAnchor === "dates" ?(
            <ListItemText
              primary="Välj datum"
              secondary={chosenMovie?.dates?.[selectedIndex]}
            />
          ) : (
            <ListItemText
              primary="Välj föreställning"
              secondary={chosenMovie?.shows?.[selectedIndex]?.startTime + " - " + chosenMovie?.shows?.[selectedIndex]?.endTime }
            />
          )}
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuAnchor === "dates"
          ? chosenMovie?.dates?.map((date, index) => (
              <MenuItem
                key={date}
                // disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {date}
              </MenuItem>
            ))
          : chosenMovie?.shows?.map((show, index) => (
              <MenuItem
                key={index}
                // disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {show.startTime + " - " + show.endTime}
              </MenuItem>
            ))}
      </Menu>
    </div>
  );
}
