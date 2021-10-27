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
        if (quesIndex ==9 ) {

        } else {
            setQuesIndex(c=> c + 1);
        }
    }

    if (quiz==null) {
        return "Loading...";1
    } else {
        return (<>
            {(quesIndex+1)+". " + quiz[quesIndex].question}
            <br />
            <button id="nextQues" onClick={nextQues}> {quesIndex <9? "Next": "Submit"}</button> 
        </>);
    }
 
    //         // fetch api using props.user.category
    //         // result set in a state variable.
    //         // have a question index
    //         // setUser being sent, u should set the answer for each question and whether it is correct.
    // },[props.user.category]);
    // return(<h1>{props.user.username + props.user.category}</h1>);
}
