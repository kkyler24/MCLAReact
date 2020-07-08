import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "../../client/src/Pages/Home.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutUS from "./Pages/About.js";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" render={(props) => <Home {...props} />} /> */}
            <Route path="/About" render={(props) => <AboutUS {...props} />} />
            {/* <Route
              path="/landing-page"
              render={(props) => <LandingPage {...props} />}
            /> */}
            {/* <Route path="/About" render={(props) => <About {...props} />} />
            {/* <Route */}
            {/* path="/login-page"
              render={(props) => <LoginPage {...props} />}
            /> */}
            {/* <Redirect to="/index" />
            <Redirect from="/" to="/index" /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
