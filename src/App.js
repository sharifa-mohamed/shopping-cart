import './App.css';
import React, { useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { auth } from "./firebase"
import { useStateValue } from './Context/StateProvider';
import Payment from './Components/Payment';

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //user was logged in or just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is loggedout
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, []);



  return (

    <Router>
      <div className="app">

        <Routes>
          <Route exact path="/" element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>} />

          <Route exact path="/Login" element={
            <React.Fragment>
              <Login />
            </React.Fragment>} />

          <Route exact path="/checkout" element={
            <React.Fragment>
              <Header />
              <Checkout />
            </React.Fragment>} />

          <Route exact path="/payment" element={
            <React.Fragment>
              <Header />
              <Payment />
            </React.Fragment>} />
        </Routes>
      </div>
    </Router >);
}

export default App;
