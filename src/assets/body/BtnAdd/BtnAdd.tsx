import {useState} from "react";


export default function BtnAdd() {
    
    const [shoes, setShoes] = useState({
        brand: "nike",
        size:[20, 22, 24],
        price: 10,
        prop: {
            backcolor: 'red',
            color: 'blue'
        }
    })
    
    function add() {
        setShoes({...shoes, price: 50, prop:{ ...shoes.prop, color: 'yellow'}, brand: 'adidas'})
    }
    
    return(
        <div>
            {shoes.price}
            <br/>
            {shoes.brand}
            <br/>
            <button className={'btn btn-primary'} onClick={add}>click me</button>
            <br/>
            {shoes.prop.color}
        </div>
    )
}