import React, { useState, useEffect } from 'react';

import { 
	FirstCheckBascet, 
	SecondCheckActivateBusket, 
	SwitchСheckStore, 
	SecondCheckBascet 
} from "../../basket/basket.js";

import {
  useHistory,
  Link,
  useLocation
} from 'react-router-dom';

const logo             = "/style/img/Logo.svg";
const question 		   = "/style/img/question.svg";
const firstCheckPath   = "https://rest.kvinto.com.ua:8580/style/img/check1.svg";
const secondCheckPath  = "https://rest.kvinto.com.ua:8580/style/img/check2.svg";
const plusIcon         = "https://rest.kvinto.com.ua:8580/style/img/plus.svg";


const firstCheck = (check, elementsFirstCheck, switchСheck) => {
	elementsFirstCheck = FirstCheckBascet.getState().data.length
	return ( check ) ? (
			<>
					<div  onClick={() => { switchСheck("first") }}>
						<Link to={"/busket"}>
							<img alt="" src={firstCheckPath} />
						</Link>
						<div>{ ( elementsFirstCheck > 9 ) ? <p>9<span>{  ( "+" + (elementsFirstCheck - 9) ) }</span> </p>: <p>{elementsFirstCheck}</p> } </div>
					</div>
			</>
		) : null
}

const secondCheck = (elementsSecondCheck, switchСheck) => {
	elementsSecondCheck = SecondCheckBascet.getState().data.length
	return ( SecondCheckActivateBusket.getState().data ) ?  (
					<>
						<div  onClick={() => { switchСheck("second") }}>
							<Link to={"/busket"}>
								<img alt="" src={secondCheckPath} />
							</Link>
							<div>{ ( elementsSecondCheck > 9 ) ? <p>9<span>{  ( "+" + (elementsSecondCheck - 9) ) }</span> </p>: <p>{elementsSecondCheck}</p> } </div>
						</div>
					</>
		) : null
}



export const Header = () =>  {
	const [ check, setCheck ] 								    = useState(false);
	const [ elementsFirstCheck,   setElementsFirstCheck   ] 	= useState(null);
	const [ elementsSecondCheck,  setElementsSecondCheck  ] 	= useState(null);
	const [ activateSecondCheck,  setactivateSecondCheck  ]     = useState(null);

	const history    = useHistory();
	const location   = useLocation();
	
	function moovToQuestion(){
		if(location.pathname === "/status"){
			 history.goBack();
			 history.goBack();
		}else {
			history.push("/status");
		}
	}

	if(!check){
		if(FirstCheckBascet.getState().data[0]) setCheck(true)
	}

	useEffect(() => {
			setactivateSecondCheck(SecondCheckActivateBusket.getState().data);
			FirstCheckBascet.subscribe(() => {
				if(FirstCheckBascet.getState().data[0]) setCheck(true);
				else setCheck(false);
				setElementsFirstCheck(FirstCheckBascet.getState().data.length);
			})

			SecondCheckBascet.subscribe(() => {
				setElementsSecondCheck(SecondCheckBascet.getState().data.length);
			})

			SecondCheckActivateBusket.subscribe(() => {
				const data = SecondCheckActivateBusket.getState().data;
				setactivateSecondCheck(data);
			})

	},[]);

	function switchСheck(checkName){
		SwitchСheckStore.set({ data: checkName });
	}

	function activateSecondCheack(){
		SecondCheckActivateBusket.set({data: true})
	}

	return (
		<section className="wpapper-header">
			<div className="header">
				<div>
				<Link to={"/menu"}>
					<img alt="logo"   src={logo} />
				</Link>
					<div  onClick={() => { moovToQuestion()}}>
						<Link >
							<img alt="question" src={question} />
						</Link>
					</div>
				</div>
				<div>
						{<div className="header-basket">{firstCheck(check, elementsFirstCheck,switchСheck) }</div>}
						{ ( FirstCheckBascet.getState().data.length > 0 && (!activateSecondCheck) ) ? <span onClick={() => { activateSecondCheack() }}>	<img alt="" src={plusIcon} /> </span> : null }
						{ (activateSecondCheck) ? <div className="header-basket">{secondCheck(elementsSecondCheck, switchСheck)}</div>  : null}
				</div>
			</div>
		</section>
	)
}