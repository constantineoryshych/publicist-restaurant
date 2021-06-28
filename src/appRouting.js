import React, { useEffect } from 'react';
import { WelcomPage }       from './welcomePage/WelcomePage';
import { Menu }             from './menu/Menu';
import { Busket }           from './basketView/index.jsx';
import { OrderStatus }      from './status/status.jsx';
import { ReservationForm }  from './welcomePage/reservationForm.jsx'

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const styleMain = {
  "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
}

const wrapperStyle = {
  "width": "100%",
  "height": "calc(var(--vh, 1vh) * 100)",
  "fontFamily": "Conv_DecimaMonoPro, Sans-Serif"
}

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
  }, [location]);
}

export const AppRounting = ( data ) => {
  usePageViews();
  return (
    <div style={wrapperStyle} className="wrapper">
      <section style={styleMain} className="main">
               <Switch>
                  <Route path="/"                 exact component={ WelcomPage                  } />
                  <Route path="/param*"           component={ () => <WelcomPage param={true}  />} />
                  <Route path="/reservation"      exact component={ReservationForm        }       />
                  <Route path="/menu"             component={ () => <Menu  data={data}        />} />
                  <Route path="/busket"           component={ Busket }                            />
                  <Route path="/status"           component={ () => <OrderStatus data={data}  />} />
                </Switch>
      </section>
    </div>
  )

};

export default AppRounting;