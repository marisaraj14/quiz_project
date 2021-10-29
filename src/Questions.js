import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Questions(props) {
    const [quiz, setQuiz] = useState(null);
    const [quesIndex, setQuesIndex] = useState(0);
    const [result, setResult]=useState({
        totalScore:0,
        answerList:{
            answer:"",
            score:0
        }
    });
    //const [answer, setAnswer] = useState(""); // {totalscore:0, answerList: [{ answer:, result:},]}
    //const [score, setScore] = useState(0);
    const [disable, setDisable] = useState(false);

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

    function checkAnswer() {
        if (result.answerList.answer != quiz[quesIndex].correct_answer) {
            alert("Wrong answer!");
        }
        else {
            alert("Right answer!");
            setResult(...result, result.answerList.score= result.answerList.score+1);
            //setScore(score + 1);
        }
    }

    function nextQues() {
        setDisable(false);
        if (quesIndex == 9) {
            alert("your marks is:" + result.answerList.score);
        } else {
            setQuesIndex(c => c + 1);
        }
    }
    //                    <img src="https://i.ibb.co/Jn8dnM2/Untitled-design-removebg-preview.png" alt="Untitled-design" class="absolute top-0 right-0  h-40 opacity-100 mt-20 mr-14" />

    //(quesIndex + 1)
    if (quiz == null) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <>
            <section class="hero container h-72 max-w-screen-lg mx-auto flex justify-center -mt-16 z-0">
                <img src="https://img-08.stickers.cloud/packs/763b1cfd-e8e1-4c76-ba8e-ed3c110683cb/webp/fffd5fee-14b4-4bcb-85bf-e1320de244ce.webp"/>
                </section>
                <div class="bg-white opacity-100 h-4/5 w-11/12 p-8 m-16 -mt-28 text-center z-10">
                    <h1 class="mt-8 text-yellow-700 text-4xl font-black pr-20"><div dangerouslySetInnerHTML={{ __html: quiz[quesIndex].question }} /></h1>
                    <div class="bg-yellow-400 h-64 mt-10 w-1/2 text-center content-center">
                        <button id="1" class="text-5xl pt-2 text-center  h-full w-full text-white font-bold text-center m-0 p-0 text-center inline-block" 
                        onClick={() => {
                            setResult({...result, answerList.answer:"True"}),
                            checkAnswer();
                            setDisable(true);
                        }} disabled={disable}>
                            True
                        </button>
                    </div>
                    <div class="bg-yellow-500 h-64 -mt-64  w-1/2 text-center float-right">
                        <button id="0" class="text-5xl pt-2 text-center text-white font-bold text-center h-full w-full m-0 p-0 text-center inline-block" 
                        onClick={() => {
                            setResult({...result, answerList.answer ="False"}),
                            checkAnswer();
                            setDisable(true);
                        }} disabled={disable}>
                            False
                        </button>
                    </div>
                    <div id="nextQues" class="bg-red-500 w-1/2 mt-4 align-middle inline-block align-middle">
                        <button class="text-white text-3xl font-black m-0 p-3 h-full w-full"
                            onClick={nextQues} disabled={!disable}> {quesIndex < 9 ? "Next" : "Submit"}</button>
                    </div>
                </div>
            </>);
    }





    //         // fetch api using props.user.category
    //         // result set in a state variable.
    //         // have a question index
    //         // setUser being sent, u should set the answer for each question and whether it is correct.
    // },[props.user.category]);
    // return(<h1>{props.user.username + props.user.category}</h1>);
}
