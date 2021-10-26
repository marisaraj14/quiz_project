import { Router, Link } from "@reach/router"
export default function Main(){
    return(
      <div className="SAMPLE">
        <img src="https://i.ibb.co/CK33Rbm/image-1-removebg-preview.png" class="animate-wiggle object-scale-down h-48 w-full mb-0 mt-32"
          alt="Egg Fairy" />
        {/* PLAYER REGISTRATION*/}
        <div class="grid place-items-center h-screen -mt-64">
          <div class="border-dashed border-4 border-yellow-500  rounded-md w-2/4 text-center p-4">
            <p class="font-TheGoodMonolith text-xl">Um Hi, would you like me to quiz ya?</p>
            <input class="shadow appearance-none border-b-2 border-dashed border-yellow-400 rounded w-2/4 py-2 px-3 mt-4 
            text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Your name goes here." />
            {/* Drop Down Box */}
            <div class="p-10">
              <div class="dropdown flex relative">
                <button class=" inline text-gray-400 text-1xl p-1 rounded ml-40 inline-flex w-2/4 pl-10 items-center border-4 
                border-dashed border-yellow-400">
                  Choose a Category
                </button>
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ml-40 mt-10">
                  <li class="">
                    <Link to="mythology">
                      <p class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-28 block whitespace-no-wrap">Mythology</p>
                    </Link>
                  </li>
                  <li class="">
                    <Link to="vidgames">
                      <p class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Video Games</p>
                    </Link>
                  </li>
                  <li class="">
                    <Link to="arts">
                      <p class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Art</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <i class='fa fa-play text-yellow-500 animate-bounce text-5xl float-right -mt-2' ></i>
  
            </div>
          </div>
        </div>
      </div>);

      
  }