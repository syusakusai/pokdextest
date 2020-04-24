import React from 'react';
import "./Person.css";
// import Radium from 'radium';
import styled from 'styled-components';


const StyleDiv = 		
styled.div`

	width: 60%;
	margin: auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;
	margin-bottom: 16px;

	@media(min-width: 500px) {
			width : 450px
	}


		`

		const StyleParagraph = styled.p`
		color:red;
		`
const person = (props) => {
	// const stylePerson = {
	// 	'@media(min-width: 500px)' :{
	// 		width : '450px'
	// 	}
	// }

	return (
		// <div className="Person" style = {stylePerson}>
		<StyleDiv>
		<StyleParagraph onClick={props.pClick}>Im a {props.name}! and i am {props.age} old ! </StyleParagraph>
		<p> {props.children} </p>
		<input type="text" onChange={props.changed} value={props.name} />
		</StyleDiv>
		)
};


export default person;

