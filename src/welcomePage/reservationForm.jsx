import React from 'react';

import { ContactInformation } from "./contactInformation.jsx"

const logo = "/style/img/Logo.svg";

export  const ReservationForm = () => (
		<>
				<div className="reservation">
						<img alt="logo" src={logo} />
						<div className="services">
											<div className="button-control">
											<form >
											<div className="bbt-form-contact"><input  type="text" placeholder="Ім'я"/>           </div>
											<div className="bbt-form-contact"><input  type="text" placeholder="Прізвище"/>       </div>
											<div className="bbt-form-contact"><input type="text" placeholder="Телефон"/>        </div>
											<div className="bbt-form-contact"><input type="text" placeholder="Кількість людей"/></div>
								<textarea placeholder="Побажання..."></textarea>
								</form>
										</div>
								</div>
						  <div className="button-wrap">
								<div className="bbt-main">ПЕРЕДЗВОНІТЬ МЕНІ</div>
							</div>
				</div>
				<ContactInformation />
		</>
)