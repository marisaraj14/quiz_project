import { Link } from "@reach/router";
import React, { useRef } from 'react';
import Questions from './Questions';

export default function Main(props) {
  const user = props.user;
  const setUser = props.setUser;
  const username= useRef();



  return (
    <div className="SAMPLE">
      <img src="https://i.ibb.co/CK33Rbm/image-1-removebg-preview.png" className="animate-wiggle object-scale-down h-48 w-full mb-0 mt-32"
        alt="Egg Fairy" />
      {/* PLAYER REGISTRATION*/}
      <div className="grid place-items-center h-screen -mt-64">
        <div className="border-dashed border-4 border-yellow-500  rounded-md w-2/4 text-center p-4">
          <p className="font-TheGoodMonolith text-xl">Um Hi, would you like me to quiz ya?</p>
          <input className="shadow appearance-none border-b-2 border-dashed border-yellow-400 rounded w-2/4 py-2 px-3 mt-4 
            text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Your name goes here."
            ref={username} />
          {/* Drop Down Box */}
          <div className="p-10">
            <div className="dropdown flex relative">
              <button className="categoryName inline text-gray-700 text-1xl p-1 rounded ml-36 inline-flex w-2/4 pl-10 items-center border-4 
                border-dashed border-yellow-400">
                {user.category}
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ml-36 mt-10">
                <li className="">
                  <p className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-28 block whitespace-no-wrap"
                    onClick={() => setUser({...user, category:"Mythology"})}>Mythology</p>
                </li>
                <li className="">
                  <p className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={() => setUser({...user, category:"Mythology"})}>Video Games</p>
                </li>
                <li className="">
                  <p className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    onClick={() => setUser({...user, category:"Mythology"})}>Art</p>
                </li>
              </ul>
            </div>
              <button onClick={setUser({...user, username: username.cur})} className="text-5xl float-right -mt-2" >
            <i className='fa fa-play text-yellow-500 animate-bounce'></i></button>
        </div>
      </div>
    </div>
    </div >);

}