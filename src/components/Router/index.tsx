import React, { FC } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import Home from "../../pages/Home";

const styles =
  makeStyles({
    root: {
      height: "100vh",
      backgroundColor: '#f7f7f7',
    },
});

const Router: FC = () => {
  const classes = styles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Routes>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>  
        </Routes>
      </Grid>
    </Grid>
  );
}

export default Router;