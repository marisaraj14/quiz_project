import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Questions(props) {
    const [quiz, setQuiz] = useState(null);
    const [quesIndex, setQuesIndex] = useState(0);

    const url = "https://opentdb.com/api.php?amount=10&category=" + props.user.category + "&difficulty=easy&type=boolean";

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json.results);
                setQuiz(json.results);
                setQuesIndex(0);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [props.user.category]);


    function nextQues() {
        setQuesIndex(c=> c + 1);
        console.log(quesIndex);
    }

    function onSubmit() {

    }
    return (
        <>
            {quiz==null? "Loading..." : quiz[quesIndex].question}
            <br />
            {quesIndex <9 ? <button id="nextQues" onClick={nextQues}>Next Question</button> : <p>You're Done</p>}
            <br />
            <input type="Submit" onClick="onSubmit"> Submit Answer</input>

        </>
    );
    //         // fetch api using props.user.category
    //         // result set in a state variable.
    //         // have a question index
    //         // setUser being sent, u should set the answer for each question and whether it is correct.
    // },[props.user.category]);
    // return(<h1>{props.user.username + props.user.category}</h1>);
}