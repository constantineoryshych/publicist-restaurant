import {
    FirstCheckBascet,
    SecondCheckBascet,
    SwitchСheckStore
} from "../../basket/basket";

import React from 'react';

const minus  = "https://rest.kvinto.com.ua:8580/style/img/minus-basket.svg";
const plus   = "https://rest.kvinto.com.ua:8580/style/img/plus-basket.svg";

function increment(id){
      const BSCTDATAFIRST  = FirstCheckBascet.getState().data;
      const BSCTDATASECOND = SecondCheckBascet.getState().data;
           if(SwitchСheckStore.getState().data === "first"){
                 BSCTDATAFIRST.forEach(function(value, index){
                        if(id === value.data.id){
                            const decr = (value.data["amount"] + 1);
                            value.data["amount"] = decr;
                            BSCTDATAFIRST[index] = value;
                            FirstCheckBascet.set( { data: BSCTDATAFIRST} );
                        }
                 });
           }else{
                 BSCTDATASECOND.forEach(function(value, index){
                        if(id === value.data.id){
                            const decr = (value.data["amount"] + 1);
                            value.data["amount"]  = decr;
                            BSCTDATASECOND[index] = value;
                            SecondCheckBascet.set( { data : BSCTDATASECOND } );
                        }
                 });
           }
}

function decrement(id){
      const BSCTDATAFIRST  = FirstCheckBascet.getState().data;
      const BSCTDATASECOND = SecondCheckBascet.getState().data;
               if(SwitchСheckStore.getState().data === "first"){

                     BSCTDATAFIRST.forEach(function(value, index){
                            if(id === value.data.id){
                                if(value.data["amount"]<1) return
                                const decr = (value.data["amount"] - 1);

                                value.data["amount"] = decr;
                                BSCTDATAFIRST[index] = value;
                                FirstCheckBascet.set( { data: BSCTDATAFIRST} );
                            }
                     });
               }else{
                     BSCTDATASECOND.forEach(function(value, index){
                            if(id === value.data.id){
                                if(value.data["amount"]<1) return
                                const decr = (value.data["amount"] - 1);
                                value.data["amount"]  = decr;
                                BSCTDATASECOND[index] = value;
                                SecondCheckBascet.set( { data : BSCTDATASECOND } );
                            }
                     });
               }
}

export const CatalogItems = (data) => {
      const coefficientWeight = 1; // variable coefficient of mass of the dish
	    return (
  	    	<div className="order-item">
  		            <p>{data.data.data.name}</p>
                        <div className="quantity">
                           <div>
                               <img onClick={() => decrement(data.data.data.id)} src={minus} alt="icon"/>
                                       <span>{data.data.data.amount}</span>
                               <img onClick={() => increment(data.data.data.id)} src={plus} alt="icon" />
                           </div>
                           <div>
                               <img onClick={() => {}} src={minus} alt="icon"/>
                                       <span>{coefficientWeight*100}гр</span>
                               <img onClick={() => {}} src={plus} alt="icon" />
                           </div>
                           <span>{(data.data.data.amount > 0 ) ? (data.data.data.price*data.data.data.amount) : 0}₴</span>
                        </div>
            </div>
          )
};


