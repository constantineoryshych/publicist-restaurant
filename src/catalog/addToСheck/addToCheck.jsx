import React, { useState, useEffect, useCallback } from 'react';

import {
	FirstCheckBascet,
	SecondCheckBascet,
	deleteToFirstCheack,
	addToFirstCheack,
	SecondCheckActivateBusket,
	addToSecondCheck,
	SwitchСheckStore,
	deleteToSecondCheck
} from '../../basket/basket.js';

export function AddToCheck( data, {catalog}){
		const [ selectFirstCheck,     setSelectFirstCheck     ]  = useState(false);
		const [ selectSecondCheck,    setSelectSecondCheck    ]  = useState(false);
		const [ activateSecondCheack, setActivateSecondCheack ]  = useState(false);
		const [ idElement, 			  setIdElement 			  ]  = useState(null);
		const coefficientWeight = 2; 							 // variable coefficient of mass of the dish

		const showSelectedItems = useCallback(() => {
			[SecondCheckBascet.getState().data,
				FirstCheckBascet.getState().data ].forEach(function(item, i, arr) {
						item.forEach(function(secondItem, index, array) {
							if( idElement === secondItem.data.id ){
								  if(i > 0){
									setSelectFirstCheck(true)
								  }else{
									setSelectSecondCheck(true)
								  }
							}
						})
				})
		}, [idElement])

		useEffect(() => {
			setIdElement(data.data.id);
			SecondCheckActivateBusket.subscribe(() => {
				if(SecondCheckActivateBusket.getState().data){
					setActivateSecondCheack(true);
				}
			})
				if(SecondCheckActivateBusket.getState().data){
					setActivateSecondCheack(true);
				}
			showSelectedItems();
		}, [data.data.id, showSelectedItems])

		
	  	function click( data, cheackName ){
			if(!data) return
			addGoodsToCheck(data, cheackName);
		}

		function addGoodsToCheck(data, cheackName){
			if(cheackName === "first" ){
				SwitchСheckStore.set({ data: "first" });
				if(!selectFirstCheck) { setSelectFirstCheck(true); addToFirstCheack(data) } else {
					setSelectFirstCheck(false);
					deleteToFirstCheack(data);
				};
			} else {
				SwitchСheckStore.set({ data: "second" });
				if(!selectSecondCheck) { setSelectSecondCheck(true);  addToSecondCheck(data) } else {
					setSelectSecondCheck(false);
					deleteToSecondCheck(data);
				}
			}
		}


		function secondCheck(){
			return(
					<div onClick={() => { click(data, "second") }} className="check-img">
						<img alt="" src={ ( "https://rest.kvinto.com.ua:8580/style/img/" + ((selectSecondCheck) ? "check-gree2.svg" :  "check2.svg" )) } />
					</div>
			)
		}

		return (

					<div className="check" data-catalog={catalog}>
						<span>Додати до чеку</span>
						<div>
							<div className="check-icons">
								<div onClick={() => { click(data, "first") }} className="check-img">
									<img alt="" src={ ( "https://rest.kvinto.com.ua:8580/style/img/" + ((selectFirstCheck) ? "check-green.svg" : "check1.svg" )) } />
								</div>
								<div onClick={() => { }} className="check-img">
									{(activateSecondCheack)? secondCheck() : null}
								</div>
							</div>
							<div className="check-price">
								<span>{coefficientWeight*100}гр</span>
								<span>{data.data.price + "₴"}</span>
							</div>
						</div>
					</div>

		)

}