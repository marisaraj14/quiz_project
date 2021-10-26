import React, { useEffect } from 'react';

export default function Questions(props){
    useEffect({
            // fetch api using props.user.category
            // result set in a state variable.
            // have a question index
            // setUser being sent, u should set the answer for each question and whether it is correct.
    },[props.user.category]);
    return(<h1>{props.user.username + props.user.category}</h1>);
}