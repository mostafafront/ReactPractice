// import {useState} from "react";

interface Props{
    children: string;
    color?: "primary" | 'secondary'
    clickF: () => void
}

function Button(props: Props) {
    
    return(
        <button className={'btn btn-'+ props.color} onClick={props.clickF}>{props.children}</button>
    )
}

export default Button