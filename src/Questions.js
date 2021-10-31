import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "@reach/router"


export default function Questions(props) {
    const [quiz, setQuiz] = useState(null);
    const [quesIndex, setQuesIndex] = useState(0);
    const [result, setResult] = useState({
        totalScore: 0,
        answerSelected: null,
    });
    const navigate = useNavigate();


    const url = "https://opentdb.com/api.php?amount=10&category=" + props.user.category + "&difficulty=easy&type=boolean";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setQuiz(json.results);
                setQuesIndex(0);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [url]);

    function checkAnswer(ans) {
        if (ans !== quiz[quesIndex].correct_answer) {
            setResult({ ...result, answerSelected: 0 })
        }
        else {
            props.setUser({ ...props.user, totalScore: props.user.totalScore + 1 });
            setResult({ ...result, answerSelected: 1 });
        }
    }

    function nextQues() {
        setResult({ ...result, answerSelected: null });
        if (quesIndex === 9) {
            navigate('/ResultScreen');
        } else {
            setQuesIndex(c => c + 1);
        }
    }

    function displayButton() {
        if (result.answerSelected !== null) {
            return "text-white text-4xl font-black font-chakra bg-blue-400 w-2/12 mt-4 p-2 inline-block hover:bg-blue-500 rounded-md p-3 visible";
        }
        else
            return "invisible";
    }

    if (quiz == null) {
        return (
            <div className="flex items-center justify-center space-x-2 duration-10000 animate-pulse mt-96">
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>);
    }
    return (
        <>
            <section className="hero container h-72 max-w-screen-lg mx-auto flex justify-center mt-8 z-0 ">
                <img alt="Sleeping egg" src="https://img-08.stickers.cloud/packs/763b1cfd-e8e1-4c76-ba8e-ed3c110683cb/webp/fffd5fee-14b4-4bcb-85bf-e1320de244ce.webp" />
            </section>
            <section className="bg-white opacity-100 h-auto rounded-lg w-11/12 p-10 m-16 -mt-28 text-center z-10">
                {/* <div className="resultMessage"></div> */}
                <h1 className="mt-8 text-yellow-700 text-4xl font-chakra font-black pr-20"><div dangerouslySetInnerHTML={{ __html: (quesIndex+1)+". "+quiz[quesIndex].question }} /></h1>
                <div className="bg-yellow-400 h-72 mt-14 w-2/5 text-center content-center ml-36 rounded-md hover:bg-rosyBrown">
                    <button id="1" className="text-6xl pt-2 font-TheGoodMonolith text-center  h-full w-full text-white font-bold text-center m-0 p-0 text-center inline-block"
                        onClick={() => {
                            checkAnswer("True");
                        }} disabled={result.answerSelected != null}>
                        True
                    </button>
                </div>
                <div className="bg-yellow-500 h-72 -mt-72 font-TheGoodMonolith w-2/5 text-center float-right mr-36 rounded-md hover:bg-rosyBrown">
                    <button id="0" className="text-6xl pt-2 text-center text-white font-bold text-center h-full w-full m-0 p-0 text-center inline-block  focus:outline-none focus:ring-3 focus:ring-blue-600	 focus:ring-opacity-50"
                        onClick={() => {
                            checkAnswer("False");
                        }} disabled={result.answerSelected != null}>
                        False
                    </button>
                </div>
                {result.answerSelected === 0 ?
                    <div className="text-3xl mt-6 font-bold text-red">The right answer was {quiz[quesIndex].correct_answer}	&#128557;</div> : result.answerSelected === 1 ?
                        <div className="text-3xl mt-6 font-bold text-pineGreen">Your answer is correct! &#129321;</div> : ""}

                <button className={displayButton()}
                    onClick={nextQues} disabled={result.answerSelected === null}> {quesIndex < 9 ? "NEXT" : "Submit"}</button>

            </section>
        </>);
  
}
