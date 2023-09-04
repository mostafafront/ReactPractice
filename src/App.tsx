import "./App.css";
import Alert from "./assets/body/Alert/alert.tsx";
// import {Fragment} from "react";
import Button from "./assets/body/Alert/Button.tsx";
import { useState } from "react";
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
import Form from "./assets/body/Form/Form.tsx";
import Table from "./assets/body/ExpenceTracker/Table.tsx";

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
    { id: 1, Description: "aaa", Amount: 12, category: "Geroceries" },
    { id: 2, Description: "bbb", Amount: 12, category: "Geroceries" },
    { id: 3, Description: "ccc", Amount: 12.5, category: "Geroceries" },
    { id: 4, Description: "ddd", Amount: 12, category: "Geroceries" }])

    
  return (
    <>
      {showAlert && (
        <Alert close={closeAlert}>
          salamm were <span className={"bg-warning"}>children</span>
        </Alert>
      )}

      <br />
      <Button color={"primary"} clickF={changeAlert}>
        show
      </Button>
      <br />
      <br />
      <br />
      <RightSide></RightSide>
      <LeftSide></LeftSide>
      <br />
      <MiddleSide></MiddleSide>
      <br />
      <br />
      <br />
      <SwitchLike onclickP={() => console.log("clicked")}></SwitchLike>
      <br />
      <BtnAdd></BtnAdd>
      <br />
      <br />

      <Navbar coutItems={itemShop.length}></Navbar>
      <ProductItem
        children={itemShop.map((item) => (
          <li>{item}</li>
        ))}
      ></ProductItem>
      <BtnClear clearF={() => setItemShop([])}></BtnClear>

      <br />
      <br />
      <br />

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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Form></Form>

           <br />
      <br />
      <br />

      <Table
        expense={SelectedItem}
        deleteItem={(id) => setSelectedItem(SelectedItem.filter((item) => item.id !== id))}
      ></Table>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
    
  );
}

export default App;
