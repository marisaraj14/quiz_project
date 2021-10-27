import './App.css';

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Questions from './Questions';
import Main from './Main';

export default function App(){
  const [user, setUser] = React.useState({
    username: "",
    category: "",
    answers: []
  });
  
return(
  <Router>
    <Main user={user} setUser={setUser} path="/" />
    <Questions user={user} setUser={setUser} path="/Questions" />
  </Router>
  );
}


