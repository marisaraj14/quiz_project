import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "@reach/router"


export default function Questions(props) {
    const [quiz, setQuiz] = useState(null);
    const [quesIndex, setQuesIndex] = useState(0);
    const [result, setResult] = useState({
        correctResult: null
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
            setResult({ ...result, correctResult: "False" })
        }
        else {
            setResult({ ...result, correctResult: "True" });
            //props.user.totalScore + 1
            props.setUser({ ...props.user, totalScore: props.user.totalScore + 1 });
        }
    }

    function nextQues() {
        setResult({ ...result, correctResult: null });
        if (quesIndex === 9) {
            navigate('/ResultScreen');
        } else {
            setQuesIndex(c => c + 1);
        }
    }

    function displayButton() {
        if (result.correctResult !== null) {
            return "row-start-6 justify-self-end text-white text-4xl font-black font-chakra bg-blue-400 w-1/5" +
            " hover:bg-blue-500 rounded-md p-3 visible hover:bg-blue-400  focus:outline-none focus:ring-4" +
            " focus:ring-appleGreen focus:ring-opacity-90";
        }
        return "invisible";
    }

    function displayChoice(ans) {
        let cl = "text-5xl text-white font-bold font-TheGoodMonolith rounded-md py-4 opacity-80 w-1/2";
        if (result.correctResult === null) {
            cl += " bg-yellow-500 hover:bg-yellow-300 focus:ring-4 focus:ring-pink-500 opacity-50";
        }
        else if (quiz[quesIndex].correct_answer !== ans) {
            if ("True" === result.correctResult) {
                cl = "invisible ";
            } else {
                cl += " bg-red";
            }
        } else {
            cl += " bg-pineGreen ";
        }
        return cl;
    }

    if (quiz == null) {
        return (
            <div className="flex items-center justify-center space-x-2 duration-10000 animate-pulse mt-96">
                <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>);
    }
    const alertStyle = 'text-3xl row-start-5 mt-6 font-bold';
    return (
        <main>
            <img alt="Sleeping egg"
                src="https://img-08.stickers.cloud/packs/763b1cfd-e8e1-4c76-ba8e-ed3c110683cb/webp/fffd5fee-14b4-4bcb-85bf-e1320de244ce.webp"
                className=" object-scale-down h-80  mx-auto mt-2" />
            <section className="bg-white grid grid-rows-6 grid-cols-1 grid-flow-col gap-2 rounded-lg w-11/12 p-10 m-20 -mt-32 text-center z-10 justify-items-center">
                <h1 className="text-yellow-700 mt-10 text-4xl font-chakra font-black row-start-1 row-span-2"
                    dangerouslySetInnerHTML={{ __html: (quesIndex + 1) + ". " + quiz[quesIndex].question }} />
                {/* True */}
                <button className={"row-start-3 " + displayChoice("True")} onClick={() => { checkAnswer("True"); }}
                    disabled={result.correctResult != null} >True</button>
                {/* False */}
                <button className={"row-start-4 " + displayChoice("False")} onClick={() => { checkAnswer("False"); }}
                    disabled={result.correctResult != null} >False</button>
                {result.correctResult === "False" ?
                    <p className={alertStyle + " text-red"}>The right answer was {quiz[quesIndex].correct_answer}	&#129313;</p> :
                    result.correctResult === "True" ?
                        <p className={alertStyle + " text-pineGreen"}>Your answer is correct! &#128029;&#10024;</p> : ""}

                <button className={displayButton()}
                    onClick={nextQues} disabled={result.correctResult === null}> {quesIndex < 9 ? "NEXT" : "Submit"}</button>

            </section>
        </main>);

}
