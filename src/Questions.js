import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Questions(props) {
    // let [dogImage, setDogImage] = useState(null)

    // useEffect(() => {
    //     fetch("https://opentdb.com/api.php?amount=8&category=25&difficulty=easy&type=boolean&encode=base64")
    //     .then(response => response.json())
    //     .then(data => setDogImage(data.message))
    //     //https://opentdb.com/api.php?amount=8&category=25&difficulty=easy&type=boolean&encode=base64
    //         // fetch api using props.user.category
    //         // result set in a state variable.
    //         // have a question index
    //         // setUser being sent, u should set the answer for each question and whether it is correct.
    // },[props.user.category]);
    // fetch to complete, we dont attempt to render the image
    let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setDogImage(data.message))
    }, [])
    return (
        <div>
            {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
        {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}
        </div>
      );

    //return (<h1>{props.user.username + props.user.category}</h1>);
}
