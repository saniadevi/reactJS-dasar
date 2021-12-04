import React from "react";
import ReactDOM from "react-dom";
// import App from './App';
// import Variabel from './reactjsdasar/Variabel';
// import StateProps from './reactjsdasar/StateProps';
// import Mobil from './reactjsdasar/Mobil';
// import Map from './reactjsdasar/Map';
// import Hp from './reactjsdasar/Hp';
// import Lifecycle from './reactjsdasar/lifecycle';

import "bootstrap/dist/css/bootstrap.min.css";
// import Index from "./crud/Index";
import Index from "./Tugas/Index";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Variabel /> */}
    {/* <StateProps /> */}
    {/* <Mobil /> */}
    {/* <Map /> */}
    {/* <Hp /> */}
    {/* <Lifecycle /> */}
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
