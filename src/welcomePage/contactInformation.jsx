import React from 'react';

const instagram		= "./../style/img/icons8-instagram.svg";
const facebook		= "/style/img/icons8-facebook.svg"

export  const ContactInformation = () => (
		<>
				<div className="contact-information">

							<a href="https://www.instagram.com/publicist_rest/"><img  alt="" src={instagram}/><span>Instagram</span></a>
							<a href="https://www.facebook.com/publicist.rest"><img  alt="" src={facebook} /><span>Facebook</span></a>
							<span>+38 095 535-55-24</span>
							<span>Січових Стрільців, 25</span>

				</div>
		</>
)