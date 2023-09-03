interface Props {
    coutItems : number
}
export default function Navbar(props: Props) {
    return(
        <>
        
        <div style={{width: '30px', height: '26px', backgroundColor: 'mediumvioletred', color: 'white', textAlign:'center'}}>
        {props.coutItems}
        </div>
        
        <div>
        Navbar
        </div>
        
        </>
    )
}