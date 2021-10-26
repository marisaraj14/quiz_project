import { useNavigate } from "@reach/router";
import React, { useRef } from 'react';
import Questions from './Questions';

export default function Main(props) {
  const setUser = props.setUser;
  const username = useRef();
  const category = useRef();
  const navigate = useNavigate();
  const onClick = function () {
    setUser({ category: category.current.options[category.current.selectedIndex].value, username: username.current.value },
      navigate('/Questions'))
    console.log(category.current.selectedIndex, " ", username.current.value);
  }

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
          <label className="block mt-4 ">
            <span className="text-gray-700">Category</span>
            <select ref={category}
              className="form-select mt-1 block">
              <option value="23">Mythology</option>
              <option value="15">Video Games</option>
            </select>
          </label>
          <button onClick={() => onClick()} className="text-5xl float-right -mt-2" >
            <i className='fa fa-play text-yellow-500 animate-bounce'></i></button>
        </div>
      </div>
    </div >);

}