import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import {format} from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "f9f9f9",
      width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "f4f4f4",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    title: {
        padding: theme.spacing(2)
    },
    date: {
        flexGrow: 1
    },
  };
});

function Layout(props) {
  const classes = useStyles();
  const history = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "Todos",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Todo",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/new-todo",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar color="secondary" className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>Today is the {format(new Date(), 'do MMMM Y')}</Typography>
          <Typography>Subhrodeep</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>Todo List</Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
