import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    transform: "translateZ(0)",
  },
  iconStyle: {
    color: grey[200],
  },
}));

const Header = ({handleLogout}) => {
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid item>
            <Typography variant='h5'>Digital Campus</Typography>
          </Grid>
          <Grid item sm />
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsNoneOutlined
                  className={classes.iconStyle}
                  fontSize='small'
                />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color='secondary'>
                <ChatBubbleOutline
                  className={classes.iconStyle}
                  fontSize='small'
                />
              </Badge>
            </IconButton>
            <IconButton>
              <PersonOutlineOutlined
                className={classes.iconStyle}
                color='primary'
              />
              <button onClick={handleLogout}>LogOut</button>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
