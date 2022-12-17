import React, { Suspense ,useState} from "react";
import ReactDOM from "react-dom";
import "./index.scss";
const Header = React.lazy(() => import("home/Header"));
import CustomButton from "home/CustomButton";
import { showAlert } from "home/utils";
const App = () => {
  const [show, setShow] = useState(false)
 
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">

      {show && 
      <Suspense fallback={<div>Wait...</div>}>
      <Header />
      </Suspense>}

      <CustomButton />
      <div>User App</div>
      <button   onClick={() => {
        showAlert("Barış");
        if(show==false){
          setShow(true);
        }else{
          setShow(false);
        }
       
      }}>Header visible click !!!!</button>
    </div>

  )
}
ReactDOM.render(<App />, document.getElementById("app"));
