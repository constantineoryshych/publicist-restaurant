import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link,
  useNavigate,
} from 'react-router-dom';


export const Lang = () =>  {

    const location = useLocation();

	return (location.pathname == "/menu" ) ? <span onClick={()=>{}}>ENG</span> : null

	

}