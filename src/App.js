import './App.css';

import React, { useEffect } from "react";
import { Router } from "@reach/router";
import Questions from './Questions';
import Main from './Main';
import ResultScreen from './ResultScreen';

export default function App() {
  const [user, setUser] = React.useState(null);
  const audio = React.useRef();
  useEffect(() => {
   //audio.play();
  }, []);


  return (
    <>
    <audio ref={audio} loop autoPlay>
    <source src="Twin-Musicom-64-Sundays.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
      <Router>
        <Main user={user} setUser={setUser} path="/" />
        <Questions user={user} setUser={setUser} path="/Questions" />
        <ResultScreen user={user} setUser={setUser} path="/ResultScreen" />
      </Router>
    </>
  );
}


