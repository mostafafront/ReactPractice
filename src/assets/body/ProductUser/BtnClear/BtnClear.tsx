interface Props {
    clearF : () => void
}
export default function BtnClear(props: Props) {
    return(
        <>
            
            <button className={'btn btn-outline-danger'} onClick={props.clearF}>
                clear
            </button>
            
            <div>
                Navbar
            </div>
        
        </>
    )
}