import React, { useState, useEffect } from 'react';
import { FooterNav } from '../menu/footer/footer';
import { DataStore } from '../controllers/dataController';
import { CatalogItems } from "./catalogItem/catalogItem";

import {
    FirstCheckBascet,
    SecondCheckBascet,
    deleteToFirstCheack,
    deleteToSecondCheck,
    SwitchСheckStore
} from "../basket/basket";

import { Header } from '../menu/header/header';
import { makeAnOrder } from '../controllers/commerce';
import { TableNamberStore } from '../../src/index';
import { withFormik } from "formik";

export let dataOrder = {};

export function Busket(){
   const [ checkData,  setCheckData  ]                  = useState(FirstCheckBascet.getState().data);
   const [ requestSendMasage,  setRequestSendMasage  ]  = useState(false);

   const [ orderType,  selectOrderType               ]  = useState((!TableNamberStore.getState().tableNumber) ? "takeWithYou" : "inTheRestaurant");
   const [ saldo,  setSaldo          ]                  = useState(() => {
      const initialState =  init();
      return initialState;
   });

   function getBasketItems(){
      SwitchСheckStore.subscribe( () => {
         if(SwitchСheckStore.getState().data === "first"){
            setCheckData(FirstCheckBascet.getState().data);
         }else{
            setCheckData(SecondCheckBascet.getState().data);
         }
      })
      if(SwitchСheckStore.getState().data === "first"){
         setCheckData(FirstCheckBascet.getState().data);
      }else{
         setCheckData(SecondCheckBascet.getState().data);
      }
   }

   function calculateBalance(){
         let sum = 0;
          if(SwitchСheckStore.getState().data === "first"){
               FirstCheckBascet.getState().data.forEach(function(value, index){
                  sum = (sum + (value.data.price * value.data.amount));
                  if( (FirstCheckBascet.getState().data.length-1) === index) setSaldo(sum);
               })
         }else{
               SecondCheckBascet.getState().data.forEach(function(value, index){
                  sum = (sum + (value.data.price * value.data.amount));
                  if( (SecondCheckBascet.getState().data.length-1) === index) setSaldo(sum);
               })
         }
   }

   function init(){
      let sum = 0;
         if(SwitchСheckStore.getState().data === "first"){

               FirstCheckBascet.getState().data.forEach(function(value, index){
                  sum = (sum + (value.data.price * value.data.amount));
               })
         }else{
               SecondCheckBascet.getState().data.forEach(function(value, index){
                  sum = (sum + (value.data.price * value.data.amount));
               })
         }
      return sum;
   }

   function deleteElementsIfContZero(){
         if(SwitchСheckStore.getState().data === "first"){
               FirstCheckBascet.getState().data.forEach(function(value, index){
                        if(value.data.amount < 1) deleteToFirstCheack(value)
               })
         }else{
               SecondCheckBascet.getState().data.forEach(function(value, index){
                        if(value.data.amount < 1) deleteToSecondCheck(value)
               })
         }
   }

   useEffect(() => {
      getBasketItems();
      FirstCheckBascet.subscribe(  () =>  calculateBalance() );
      SecondCheckBascet.subscribe( () =>  calculateBalance() );
      SwitchСheckStore.subscribe(  () =>  calculateBalance() );

      return () => {
               deleteElementsIfContZero();
      }

   },[])

  function inTheRestaurant(){
               function App({ values, handleChange }){
                     dataOrder = values
                     return (
                        <div className="services">
                              <div className="button-control">
                              <form >
                                       <div className="bbt-form-field">
                                          <input id="allInOne"             name="servises"  type="radio" onChange={handleChange}  value="Все разом"       />
                                             <label for="bbt-form-field"></label>
                                             <label>Введiть номер столика</label>
                                       </div>
                                       <div className="bbt-form-field">
                                          <input id="allInOne"             name="servises"  type="radio" onChange={handleChange}  value="Все разом"       />
                                             <label for="bbt-form-field"></label>
                                             <label>Все разом</label>
                                          </div>
                                       <div className="bbt-form-field">
                                          <input id="afterReady"           name="servises"  type="radio" onChange={handleChange}  value="По готовності"   />
                                             <label for="bbt-form-field"></label>
                                             <label>По готовності</label>
                                          </div>
                                       <div className="bbt-form-field">
                                          <input id="firstВrinks"          name="servises"  type="radio" onChange={handleChange}  value="Напої одразу"    />
                                             <label for="bbt-form-field"></label>
                                             <label>Напої одразу</label>
                                          </div>
                                       <div className="bbt-form-field">
                                          <input id="serveSweetDishesLast" name="servises"  type="radio" onChange={handleChange}  value="Солодке в кінці" />
                                             <label for="bbt-form-field"></label>
                                             <label>Солодке в кінці</label>
                                          </div>
                                       <div className="bbt-form-field">
                                          <input id="anotherVariant"       name="servises"  type="radio" onChange={handleChange}  value="anotherVariant"  />
                                             <label for="bbt-form-field"></label>
                                             <label>Інший варіант</label>
                                          </div>
                                       {
                                          (values.servises === "anotherVariant") ?
                                          <textarea placeholder="Ви маєте можливість вказати нам послідовність подачі страв. Будь ласка напішіть у разі потреби."
                                             id="sequenceServingDishes" name="sequenceServingDishes"  type="name" onChange={handleChange}
                                             value={values.sequenceServingDishes} >
                                          </textarea>  : null
                                       }
                              </form>
                           </div>
                        </div>
                  );
         }

         const FormikApp = withFormik({
             mapPropsToValues({ servises, sequenceServingDishes }) {
               return {
                  servises: servises  || "",
                  sequenceServingDishes : sequenceServingDishes || "",
               };
         }

         })(App);
      return [<FormikApp  />, dataOrder]

  }

  function takeWithYou(){
         function App({ values, handleChange }){
                  dataOrder = values;
                  return (
                     <div className="services">
                        <h2>Контактні дані:</h2>
                           <div className="button-control">
                             <form >
                              <div className="bbt-form-contact"><input    placeholder="Ім'я" id="name" name="name" type="contact" onChange={handleChange} value={values.name} /> </div>
                              <div className="bbt-form-contact"><input    placeholder="Прізвище" id="soName" name="soName" type="contact" onChange={handleChange} value={values.soName} /> </div>
                              <div className="bbt-form-contact"><input    placeholder="Телефон" id="telephone" name="telephone" type="telephone" onChange={handleChange} value={values.telephone} /> </div>
                              <div className="bbt-form-contact"><input    placeholder="email" id="addres" name="addres" type="email" onChange={handleChange} value={values.addres} /> </div>
                              <div className="bbt-form-contact"><input    placeholder="Час" id="time" name="time" type="datetime-local" onChange={handleChange} value={values.time} /> </div>
                              <textarea placeholder="Напишіть сюди, якщо бажаєте додати інформацію про замовлення!" id="textearea" name="textearea" type="textearea" onChange={handleChange} value={values.textearea} >  </textarea>
                           </form>
                        </div>
                     </div>
               );
         }

         const FormikApp = withFormik({
             mapPropsToValues({ name, soName, telephone, addres,  time, textearea}) {
               return {
                   name:       name      || "",
                   soName:     soName    || "",
                   telephone:  telephone || "",
                   addres:     addres    || "",
                   time:       time      || "",
                   textearea:  textearea || "",
                };
         }


         })(App);
      return [<FormikApp  />, dataOrder]

  }


   function payment(){
            function App({ values, handleChange }){
               dataOrder.paymantSystem = values.paymantSystem;
               return (
                     <>
                        <h2>Оплата</h2>
                              <div className="button-control">
                                 <form >
                                    <div className="bbt-form-field">
                                          <input id="card" name="paymantSystem" onChange={handleChange} value="card"  type="radio"/>
                                                <label for="bbt-form-field"></label>
                                                <label>Карткою</label>
                                          </div>
                                    <div className="bbt-form-field">
                                          <input id="cash" name="paymantSystem" onChange={handleChange} value="cash"  type="radio"/>
                                                <label for="bbt-form-field"></label>
                                                <label>Готівкою</label>
                                          </div>
                                 </form>
                           </div>
                     </>
               )
            }
         const FormikApp = withFormik({
             mapPropsToValues({ paymantSystem }) {
               return {
                  paymantSystem:  paymantSystem  || "",
               };
         }
         })(App);

      return <FormikApp />
   }

   function tableNumber(){
      function App({ values, handleChange }){
         TableNamberStore.set({tableNumber: values.name})
         return (
               <>
                     <div className="button-control">
                           <form >
                              <div className="bbt-form-field">
                               <div className="bbt-form-contact">
                                          <input    placeholder="№" id="tbl" name="tbl" type="contact" onChange={handleChange} value={values.tbl} /> </div>
                                          <label for="bbt-form-field"></label>
                                    </div>
                           </form>
                     </div>
               </>
         )
      }
   const FormikApp = withFormik({
       mapPropsToValues({ tbl }) {
         return {
            tbl:  tbl  || "",
         };
   }
   })(App);

return <FormikApp />
}

      return (
         <>
         <Header/>
            <div className="basket-list">
                  <div className="control">
                     <h2>Ваше замовлення:</h2>
                     <div className="bbt-control">

                        <div onClick={() => {
                           selectOrderType("inTheRestaurant")}}
                           className={"bbt " + ( (orderType === "inTheRestaurant") ? "" : "not-active")}>В ресторані</div>
                        <div onClick={() => { /*selectOrderType("deleivery")*/ }} className="bbt not-active">Доставка   </div>
                        <div onClick={() => {selectOrderType("takeWithYou")}}
                           className={"bbt " + ( (orderType === "takeWithYou") ? "" : "not-active")}>З собою    </div>

                     </div>
                  </div>
                  <div className="order-list">
                     {(checkData) ? checkData.forEach((value, index) =>
                        <>
                           <CatalogItems  data={value}/>
                        </>
                     ): null}

                     {
                        (!TableNamberStore.getState().tableNumber && orderType !== "takeWithYou")?
                        <div className="tableNumber">
                           <h2>ВВЕДIТЬ НОМЕР СТОЛИКА:</h2>
                           {tableNumber()}
                        </div>: null
                     }

                     <div className="amount">
                        <p>Сума: </p>
                        <p>{saldo}₴</p>
                     </div>
                  </div>
                  <div className="services">
                     <h2>СЕРВІС</h2>
                        {(orderType === "inTheRestaurant") ? inTheRestaurant()[0] : "" }
                        {(orderType === "takeWithYou")     ? takeWithYou()[0]     : "" }

                  </div>
                  <div className="services">
                     {payment()}
                     <div className="button-wrap">
                     <div onClick={() => {
                        if(requestSendMasage) return
                        makeAnOrder(orderType)
                        setRequestSendMasage(true)
                     }

                     } className="bbt-main"> { requestSendMasage ? "Замовлення відправлено!" : "ПІВТВЕРДИТИ" }</div>
                  </div>
                  </div>

               </div>

               <FooterNav data={DataStore.getState().data["ua"]} />
            </>
      )

}

