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
        {/* <AboutUS /> */}
        {/* <Home /> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route exact path="/AboutUS" component={AboutUS} />
            {/* <Route
              path="/landing-page"
              render={(props) => <LandingPage {...props} />
            
       <Route path="/About" render={(props) => <About {...props} />
             <Route
             path="/login-page"
              render={(props) => <LoginPage {...props} />}
            /> 
             <Redirect to="/index" />
            <Redirect from="/" to="/index" />  */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
