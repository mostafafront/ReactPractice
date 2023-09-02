import "./App.css";
import Alert from "./assets/body/Alert/alert.tsx";
// import {Fragment} from "react";
import Button from "./assets/body/Alert/Button.tsx";
import {useState} from "react";
// import React from "react";
import RightSide from "./assets/body/RightSide/RightSide.tsx";
import LeftSide from "./assets/body/LeftSide/LeftSide.tsx";
import MiddleSide from "./assets/body/middleSide/middleSide.tsx";
import SwitchLike from "./assets/body/SwitchLike/SwitchLike.tsx";


function App() {
    
    function changeAlert() {
        setShowAlert(true)
    }
    
    function closeAlert() {
        setShowAlert(false)
    }
    

    const [showAlert, setShowAlert] = useState(false)
    

    return (
        <>
        
        {showAlert && <Alert close={closeAlert}>salamm were <span className={'bg-warning'}>children</span></Alert>}
            
            <br/>
            <Button color={'primary'} clickF={changeAlert}>show</Button>
            <br/>
            <br/>
            <br/>
            <RightSide></RightSide>
            <LeftSide></LeftSide>
            <br/>
            <MiddleSide></MiddleSide>
            <br/><br/><br/>
            <SwitchLike onclickP={() => console.log('clicked')}></SwitchLike>
        </>
    );
}



export default App;
