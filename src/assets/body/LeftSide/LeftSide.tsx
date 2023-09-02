import styles from './LeftSide.module.css'
import { FaHeart } from 'react-icons/fa';

export default function LeftSide() {
    return(
        <>
        <div style={{backgroundColor:'yellow', color:'black'}} className={[styles.defDiv, styles.defColor].join(' ')}>im left side component
        <FaHeart style={{color:'red', fontSize:'25px'}}></FaHeart>
        </div>
        </>
    )
}
