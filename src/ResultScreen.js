import { useNavigate } from "@reach/router";


export default function ResultScreen(props) {

    const navigate = useNavigate();

    function homeScreen(){
        navigate('/');
    }
    return(
        <main class="grid grid-cols-3  text-center" >
        <img src="https://64.media.tumblr.com/43ccafaf0fe89646ea68ef78c5effd7f/e5bb9df02f696945-d9/s1280x1920/50a083ff98688ff90b41d9875d62ee57e22fb3c8.png"
         alt="Celeberatory Eggs" 
         className="h-96 col-start-2 col-span-3 mt-10 content-center"/>
        <p className="font-TheGoodMonolith col-start-1 text-6xl col-span-3 font-bold mt-8 text-white ">
            Good Job {props.user.username} , you've scored {props.user.totalScore}/10!
        </p>
        <button 
        className="col-start-2 border-4 font-press-start animate-bounce border-yellow-100 
        border-dashed rounded-md p-4 mt-20 text-2xl bg-appleGreen text-white font-bold hover:bg-green-600" 
        onClick={()=>homeScreen()}>
            Back to Home
        </button>
        </main>
    );
}
