import { useNavigate } from "@reach/router"
import React, { useRef } from 'react';

export default function Main(props) {
  //const user = props.user;
  const setUser = props.setUser;
  const username = useRef();
  const category = useRef();
  const navigate = useNavigate();

  const onClick = function () {
    setUser({ category: category.current.options[category.current.selectedIndex].value, username: username.current.value },
      navigate('/Questions'))
  }

  console.log(username);
  return (
    <section className="SAMPLE">
      <img src="https://static.wikia.nocookie.net/gudetama-tap/images/b/ba/Fairy_Gudemother.png" className="animate-wiggle object-scale-down h-52 w-full mb-0 mt-28"
        alt="Egg Fairy" />
      {/* PLAYER REGISTRATION*/}
      <div className="grid place-items-center h-screen -mt-72 mb-0">
        <div className="border-dashed border-4 border-white  rounded-md w-2/4 text-center p-12">
          <p className="font-TheGoodMonolith text-3xl text-white">Um Hi, would you like me to quiz ya?</p>
          <input className="shadow appearance-none border-b-2 border-dashed border-white bg-transparent rounded w-2/4 py-2 px-6 mt-6 
            text-center text-white leading-tight hover:bg-yellow-400 placeholder-white placeholder-opacity-75 focus:outline-none focus:shadow-outline text-xl"
            id="username" type="text" placeholder="Your name goes here."
            ref={username} />
          {/* Drop Down Box */}
          <label className="block mt-4 ">
            <select ref={category}
              className="form-select mt-4 mx-16  p-2 border-dotted border-2 px-36 bg-transparent text-white text-xl inline-block hover:bg-yellow-400 focus:outline-none">
              <option value="23">Mythology</option>
              <option value="15">Video Games</option>
            </select>
          </label>
          <button onClick={() =>  onClick()} className="text-5xl float-right -mt-2" >
            <i className='fa fa-play text-white animate-bounce'></i></button>
        </div>
      </div>
    </section>);

}