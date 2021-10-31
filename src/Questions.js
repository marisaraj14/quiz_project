import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "@reach/router"


export default function Questions(props) {
    const [quiz, setQuiz] = useState(null);
    const [quesIndex, setQuesIndex] = useState(0);
    const [result, setResult] = useState({
        answerSelected: null
    });
    const navigate = useNavigate();

    // const url = "https://opentdb.com/api.php?amount=10&category=" + props.user.category + "&difficulty=easy&type=boolean";
    const url = "https://opentdb.com/api.php?amount=10&category=" + "23" + "&difficulty=easy&type=boolean";

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
            console.log(props.user);
            setResult({ ...result, answerSelected: 1 });
            //props.user.totalScore + 1
            props.setUser({ ...props.user, totalScore: props.user.totalScore + 1 });
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
            return "row-start-6 col-start-4  text-white text-4xl font-black font-chakra bg-blue-400 w-full hover:bg-blue-500 rounded-md p-3 visible hover:bg-blue-400  focus:outline-none focus:ring-4 focus:ring-appleGreen focus:ring-opacity-90";
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
        <main>
            <img alt="Sleeping egg"
                src="https://img-08.stickers.cloud/packs/763b1cfd-e8e1-4c76-ba8e-ed3c110683cb/webp/fffd5fee-14b4-4bcb-85bf-e1320de244ce.webp"
                className=" object-scale-down h-80  mx-auto mt-2" />
            <section className="bg-white grid grid-rows-6 grid-cols-5 grid-flow-col gap-2 rounded-lg w-11/12 p-10 m-20 -mt-32 text-center z-10">
                <h1 className="text-yellow-700 mt-10 text-4xl font-chakra font-black row-start-1 row-span-2 col-start-1 col-span-5 " 
                 dangerouslySetInnerHTML={{ __html: (quesIndex + 1) + ". " + quiz[quesIndex].question }} />
                {/* True */}
                <button id="1" className={result.answerSelected===null?"row-start-3 col-start-2 col-span-3 py-4 bg-yellow-400 rounded-md text-5xl font-TheGoodMonolith text-white font-bold hover:bg-yellow-300  focus:outline-none focus:ring-4 focus:ring-pink-500":
                quiz[quesIndex].correct_answer==="True"?
                "row-start-3 col-start-2 col-span-3 py-4 text-5xl text-white font-bold bg-pineGreen font-TheGoodMonolith rounded-md":  
                "row-start-3 col-start-2 col-span-3 py-4 text-5xl text-white font-bold bg-red opacity-80 font-TheGoodMonolith rounded-md"}
                    onClick={() => {
                        checkAnswer("True");
                    }} disabled={result.answerSelected != null}>
                    True
                </button>
                {/* False */}
                <button id="0" className={result.answerSelected===null?"row-start-4 col-start-2 col-span-3 text-5xl text-white font-bold bg-yellow-500 font-TheGoodMonolith rounded-md bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-pink-500":
                quiz[quesIndex].correct_answer==="False"?
                "row-start-4 col-start-2 col-span-3 text-5xl text-white font-bold bg-pineGreen font-TheGoodMonolith rounded-md":  
                "row-start-4 col-start-2 col-span-3 text-5xl text-white font-bold bg-red opacity-8s0	font-TheGoodMonolith rounded-md"}
                    onClick={() => {
                        checkAnswer("False");
                    }} disabled={result.answerSelected != null}>
                    False
                </button>
                {result.answerSelected === 0 ?
                <p className="text-3xl row-start-5 col-span-3 col-start-2 mt-6 font-bold text-red">The right answer was {quiz[quesIndex].correct_answer}	&#129313;</p> : result.answerSelected === 1 ?
                <p className="text-3xl row-start-5 col-span-3 col-start-2 mt-6 font-bold text-pineGreen">Your answer is correct! &#128029;&#10024;</p> : ""}

                <button className={displayButton()}
                    onClick={nextQues} disabled={result.answerSelected === null}> {quesIndex < 9 ? "NEXT" : "Submit"}</button>

            </section>
        </main>);

}
