import {AiFillHeart , AiOutlineHeart} from 'react-icons/ai'
import {useState} from 'react';

interface Props{
    onclickP: () => void
}

export default function SwitchLike(props:Props) {


    // const [person, setPerson] = useState({
    //     name: '',
    //     family:'',
    //     address: {
    //         aley: ''
    //     }
    // })
    
    const [toggle, setToggle] = useState(false)


    function toggleClick() {
        setToggle(!toggle)
        props.onclickP()
    }
    

    if(toggle)  
    return <AiFillHeart style={{color:'red', fontSize:'40', cursor:'pointer'}} onClick={toggleClick}></AiFillHeart>
    else
    return(    
        <div>
            <div><AiOutlineHeart style={{fontSize:'40', cursor:'pointer'}} onClick={toggleClick}></AiOutlineHeart></div>
        </div>
    )
}