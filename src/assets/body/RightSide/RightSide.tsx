import styles from './RightSide.module.css'
export default function RightSide() {
    return(
        <div className={[styles.defDiv, styles.defColor].join(' ')}>im Right side component</div>
    )
}