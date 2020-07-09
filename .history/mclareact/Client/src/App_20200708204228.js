import React, { Component } from "react";
import logo from "../src/logo.svg";
import "./App.css";
import Home from "../../client/src/Pages/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUS from "./Pages/About.js";

class App extends Component {
  render() {
    return (
      <div>
        {/* <AboutUS /> */}
        <Home />
        {/* <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={AboutUS} /> */}

        {/* <Route path="/About" render={(props) => <AboutUS {...props} />} /> */}

        {/* //  <Route path="/About" render={(props) => <About {...props} /> */}
        {/* //        <Route */}
        {/* //        path="/login-page"
      //         render={(props) => <LoginPage {...props} />}
      //       /> 
      //        <Redirect to="/index" />
      //       <Redirect from="/" to="/index" />  */}
        {/* </Switch>
        </Router> */}
      </div>
    );
  }
}

export default App;
