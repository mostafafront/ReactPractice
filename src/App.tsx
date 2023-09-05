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
import BtnAdd from "./assets/body/BtnAdd/BtnAdd.tsx";
import Navbar from "./assets/body/ProductUser/Navbar/Navbar.tsx";
import ProductItem from "./assets/body/ProductUser/ProductItem/ProductItem.tsx";
import BtnClear from "./assets/body/ProductUser/BtnClear/BtnClear.tsx";
import TextArea from "./assets/body/TextArea/TextArea.tsx";
// import Form from "./assets/body/Form/Form.tsx";
import Table from "./assets/body/ExpenceTracker/Table.tsx";
import Filter from "./assets/body/ExpenceTracker/Filter.tsx";
import FormExpense from "./assets/body/ExpenceTracker/FormExpense.tsx";
import UseEffect from "./assets/useEffect/UseEffect.tsx";


function App() {
    function changeAlert() {
        setShowAlert(true);
    }
    
    function closeAlert() {
        setShowAlert(false);
    }
    
    const [showAlert, setShowAlert] = useState(false);
    
    const [itemShop, setItemShop] = useState(["item 1", "item 2", "item 3"]);
    
    
    const [SelectedItem, setSelectedItem] = useState([
        {id: 1, Description: "aaa", Amount: 12, category: "utilities"},
        {id: 2, Description: "bbb", Amount: 15, category: "Geroceries"},
        {id: 3, Description: "ccc", Amount: 12.5, category: "entertainment"},
        {id: 5, Description: "ddd", Amount: 13.7, category: "utilities"},
        {id: 6, Description: "fff", Amount: 13.5, category: "Geroceries"},
        {id: 7, Description: "ggg", Amount: 12, category: "evtertainment"}]);
    
    
    const [category, setCategory] = useState("");
    
    const visibleExpense = category && category !== "all" ? SelectedItem.filter((item) => item.category === category) : SelectedItem;
    
    const [cat, setCat] = useState('')

    return (
        <>
            {showAlert && (
                <Alert close={closeAlert}>
                    salamm were <span className={"bg-warning"}>children</span>
                </Alert>
            )}
            
            <br/>
            <Button color={"primary"} clickF={changeAlert}>
                show
            </Button>
            <br/>
            <br/>
            <br/>
            <RightSide></RightSide>
            <LeftSide></LeftSide>
            <br/>
            <MiddleSide></MiddleSide>
            <br/>
            <br/>
            <br/>
            <SwitchLike onclickP={() => console.log("clicked")}></SwitchLike>
            <br/>
            <BtnAdd></BtnAdd>
            <br/>
            <br/>
            
            <Navbar coutItems={itemShop.length}></Navbar>
            <ProductItem
                children={itemShop.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            ></ProductItem>
            <BtnClear clearF={() => setItemShop([])}></BtnClear>
            
            <br/>
            <br/>
            <br/>
            
            <TextArea maxChar={10} key={"textvalue"}>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumloremipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumloremipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumloremipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumloremipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumloremipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumloremipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsum
            </TextArea>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
       
            
            <FormExpense submitF={(data) => setSelectedItem([...SelectedItem,{...SelectedItem, id: SelectedItem.length +1, Description: data.Description, Amount: data.Amount, category: data.Category}])}></FormExpense>
            
            <br/>
            
            <br/>
            
            <Filter changeCategory={(category) => setCategory(category)}></Filter>
            
            <br/>
            <Table
                expense={visibleExpense}
                deleteItem={(id) => setSelectedItem(SelectedItem.filter((item) => item.id !== id))}
            ></Table>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        
                    <UseEffect category={cat}></UseEffect>

                    <select className="form-select" aria-label="Default select example" onChange={(event) => setCat(event.target.value)}>
                <option selected>Open this select menu</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>

        </>
    
    );
}

export default App;
