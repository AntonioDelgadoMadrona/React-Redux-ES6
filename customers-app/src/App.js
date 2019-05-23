import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
import NewCustomerContainer from "./containers/NewCustomerContainer";

class App extends Component {

  renderCustomerNewContainer = () => <h1>Customer New Container</h1>

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/customers/new" component={NewCustomerContainer}></Route>
          <Route path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />}></Route>
          <Route path="/customers" component={CustomersContainer}></Route>
          <Route path="/" component={HomeContainer}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;