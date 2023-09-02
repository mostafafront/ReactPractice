import styles from './middleSide.module.css'
import {FaFilter} from 'react-icons/fa'


export default function MiddleSide() {
    return(
        <div className={[styles['dif-dev'], styles['dif-color']].join(' ')}>im middle side component
        <FaFilter></FaFilter>
        </div>
    )
}