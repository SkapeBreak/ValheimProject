import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Header from './components/Header'
import Checkout from './components/Checkout'
import Info from './components/Info'
function App() {
return (
  <Router>
      <div className="app">
        <Switch>
        
          {/* <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/info">
            <Info />
          </Route>

          {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/store">
            <Header />
            <Store />
          </Route>
          <Route path="/">          
             <Home /> 
          </Route>
        </Switch>
      </div>
    </Router>
);
}
export default App;
