import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Header from "home/Header";
import CustomButton from "home/CustomButton";
import {showAlert} from "home/utils";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
   <CustomButton/>
   <div>User App</div>
   <button onClick={()=>{
    showAlert("Barış");
   }}>ClickMe</button>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
