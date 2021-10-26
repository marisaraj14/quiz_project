import logo from './logo.svg';
import './App.css';

import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Mythology from './Mythology';
import VideoGames from './VideoGames';
import Arts from './Arts';
import Main from './Main';

export default function App(){
return(
  <Router>
    <Main path="/" />
  </Router>
);
}


