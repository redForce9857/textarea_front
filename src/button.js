
import React from "react";
import "./index.css";
import {useNavigate} from 'react-router-dom'



function RickRoll(){
	const navigate = useNavigate()
	const nav = (e) => {
		window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1';
	}
	return (
		<form>
			<button type="button" onClick={nav} >Boost Typing</button>
		</form>
	)
}

export default  RickRoll