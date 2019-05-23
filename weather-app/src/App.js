import React, { Component } from "react";
import { MuiThemeProvider, Toolbar, Typography } from "@material-ui/core";
import { Grid, Col, Row } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";

import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

import "./App.css";

const cities = [
  "Malaga,es",
  "Sevilla,es",
  "Granada,es",
  "Madrid,es",
  "Barcelona,es",
  "Huesca,es",
  "Bilbao,es"
];

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                  <ForecastExtendedContainer />
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
