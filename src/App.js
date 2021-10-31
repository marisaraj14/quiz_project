import './App.css';

import React from "react";
import { Router } from "@reach/router";
import Questions from './Questions';
import Main from './Main';
import ResultScreen from './ResultScreen';

export default function App(){
  const [user, setUser] = React.useState({
    username: "",
    category: "",
    totalScore:0
  });
  
return(
  <Router>
    <Main user={user} setUser={setUser} path="/" />
    <Questions user={user} setUser={setUser} path="/Questions" />
    <ResultScreen user={user} setUser={setUser} path="/ResultScreen"/>
  </Router>
  );
}


