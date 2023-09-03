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
    
    const [arr, setarr] = useState(['salam','aleik'])
    
    const [fixBug, setFixBug] = useState([
        {name: 'fix header' , id: 1, fix: false},
        {name: 'fix footer' , id: 2, fix: false}
    ])
    
    function add() {
        setShoes({...shoes, price: 50, prop:{ ...shoes.prop, color: 'yellow'}, brand: 'adidas'})
        
        // Add
        setarr([...arr, 'no'])
        // remove
        setarr(arr.filter(tag => tag !== 'salam'))
        // Update
        setarr(arr.map(tag => tag === 'aleik' ? 'khodafez' : tag))
        
        //update Array in Obejct
        setFixBug(fixBug.map(item => item.id === 1 ? {...item, fix: true} : item))
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