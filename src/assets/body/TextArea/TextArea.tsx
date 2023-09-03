import {useState} from "react";

interface Props{
    children: string
    maxChar?: number
}
export default function TextArea({children, maxChar= 10}: Props){
    
    const [toggleText, setToggleTest] = useState(false)
    
    if(children.length <= maxChar) return <p>{children}</p>


    const text = toggleText ? children : children.substring(0, maxChar)
    
    return(
        <div>
            <p>{text}...<button onClick={() => setToggleTest(!toggleText)}>{toggleText ? 'less' : 'more'}</button></p>
        </div>
    )
}