import React from 'react';
import { AppRounting }     from './appRouting'

import {
  BrowserRouter as Router
} from "react-router-dom";


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

const App = ( data ) => {
  return (
    <div style={wrapperStyle} className="wrapper">
      <section style={styleMain} className="main">
        <Router >
            <AppRounting data={data}/>
        </Router>
      </section>
    </div>
  )
};

export default App;