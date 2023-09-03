import {ReactNode} from "react";

interface Props{
    children: ReactNode;
}
export default function ProductItem(props: Props) {
    return(
        <div>
            <ul style={{listStyleType: 'none', padding: '0'}}>
                {props.children}
            </ul>
        </div>
    )
}