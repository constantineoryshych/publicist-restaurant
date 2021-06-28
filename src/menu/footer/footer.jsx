import React from 'react';

import {
  Link,
} from 'react-router-dom';

export const FooterNav = (data) => {
	    return (
	    	<>
			        <ul id="menu-footer" className="menu-footer">
				        <div className="footer-wrap">
					          {data.data.map((value, index) =>
					                <Link className="nav-item" key={Object.keys(value)[0] + index}  to={"/menu/"+Object.keys(value)}>
					                    <span>{Object.keys(value)[0]}</span>
					                </Link>
					          )}
				          </div>
			         </ul>
	         </>
	    )

};