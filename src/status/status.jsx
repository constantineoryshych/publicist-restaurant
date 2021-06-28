import React, { useState } from 'react';
import { Header }           from '../menu/header/header';
import { FooterNav }        from '../menu/footer/footer';
import { DataStore }        from '../controllers/dataController';
import { waiterСall }       from '../controllers/commerce';
import { zoomTo, CatalogZoomStore } from '../catalog/catalog';

export const OrderStatus = (data) => {
		const table = data.data.data.table;
		const [ value,      setValue ]              = useState("");
		const [ openStatus ]              			= useState(Boolean);
		const [ oficiantStatus, setOficiantStatus ] = useState(false);

		const handleChange = (event) => {
			const value = event.target.value;
			setValue(value);
		};

		const style = {
			color: "#C4C4C4"
		}

		const style_bg = {
			background:  "#C4C4C4"
		}

		function timerActivationWaiterСallButtons(){
				setTimeout(function() {
						setOficiantStatus(false);
				}, 6000);
		}


		function statusTime() {
			return (
				<>
					<div className="title"><h2>Ваш статус замовлення:</h2></div>
					<div className="step-wrapper">
						<div className="aside-composition">
							<div></div>
							<div></div>
						</div>
					<div className="content">
						<h3>Підтвердження</h3>
						<div>
							<p>Замовлення отримано, очікуйте офіціанта для підтвердження</p>
							<span className="indicator">&#10004;</span>
						</div>
					</div>
				</div>
				<div className="step-wrapper">
					<div className="aside-composition">
						<div></div>
						<div></div>
					</div>
					<div className="content">
						<h3>Готується</h3>
						<div>
							<p>Замовлення підтверджено, наразі готується шефом</p>
							<div className="indicator">&#10004;</div>
						</div>
					</div>
				</div>
				<div className="step-wrapper">
					<div className="aside-composition">
						<div></div>
						<div></div>
					</div>
					<div className="content">
						<h3>Подається</h3>
						<div>
							<p>Замовлення готово, формується подача</p>
							<div className="indicator">&#10004;</div>
						</div>
					</div>
				</div>
				<div className="step-wrapper" style={style}>
					<div className="aside-composition" >
						<div style={ style_bg}> </div>
						<div style={ style_bg}> </div>
					</div>
					<div className="content">
						<h3>Виконано</h3>
						<div>
							<p>Замовлення подано. Дякуємо!</p>
							<div className="indicator">&#10004;</div>
						</div>
					</div>
				</div>
				</>
			);
		};

	    return (
	    	<>
					<Header />
					<div className="order-status">
						{!openStatus?
						 (<>
								<div className="button-wrap">
									<div className="bbt-main disable_button"  onClick={ ()=>{/*setState(!openStatus) */}}>Статус замовлення</div>
								</div>
								<div className="button-wrap">

								<input type="text" className="comment"
									value={value}
									onChange={handleChange}
									placeholder="Введіть персональний пароль" />

								</div>
								<div className="button-wrap">
									<div onClick={ () => {
										waiterСall().then(()=>{
											if(!table) return
											timerActivationWaiterСallButtons();
											setOficiantStatus(true);
										})
									} } className={"bbt-main "  + ( (!table) ? "disable_button" : "")}> { (!oficiantStatus ) ? "Викликати офіціанта" : "Дякуємо! Офіціант вже прямує до вас"}</div>
								</div> </>) : statusTime() }
						 <h1>Збільшити зображення</h1>
						 <div className="button-wrap wrapFewButton">
						 <div class="selectCatalogItems">
								<div className={( (CatalogZoomStore.getState().data === 1 ) ? "activeBtn" : "cauntCatalogItems")} onClick={ () => { zoomTo(1) }} >
									<div></div>
								</div>
								<div className={( (CatalogZoomStore.getState().data === 2 ) ? "activeBtn" : "cauntCatalogItems")}  onClick={ () => {zoomTo(2)}} >
									<div></div>
									<div></div>
								</div>
								<div className={( (CatalogZoomStore.getState().data === 3 ) ? "activeBtn" : "cauntCatalogItems")}  onClick={ () => {zoomTo(3) }} >
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div className={( (CatalogZoomStore.getState().data === 4) ? "activeBtn"   : "cauntCatalogItems")}  onClick={ () => {zoomTo(4) }} >
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
								<div className={( (CatalogZoomStore.getState().data === 5 ) ? "activeBtn"  : "cauntCatalogItems")}  onClick={ () => {zoomTo(5) }} >
									<div></div>
									<div></div>
									<div></div>
									<div></div>
									<div></div>
								</div>
							</div>
						 </div>

					</div>
					<FooterNav data={DataStore.getState().data["ua"]}/>
	      </>
	    )
};



