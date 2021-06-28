import React from 'react';

import {
  Link,
} from 'react-router-dom';

import { ContactInformation } from './contactInformation.jsx'

export  const WelcomPage = (props) => {
	return (
		<>
			<img  alt="logo" src="/style/img/MainLogo.svg" />
				<div className="main-button">
						<Link to="/menu">
		  					МЕНЮ
						</Link>
			    </div>
				{!props.param ?
					(<div className="main-button">
						<Link  to="/reservation">Бронь стола</Link></div>) : null}
				<ContactInformation />
		</>
)}