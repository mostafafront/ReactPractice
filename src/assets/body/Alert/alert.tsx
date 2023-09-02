// import {ReactNode} from "react";

import {ReactNode} from "react";

interface Props{
    children: ReactNode;
    close: () => void
}

function Alert(props: Props) {
    return(
        <>
            <div className={"alert alert-primary alert-dismissible"}>{props.children}
                <button onClick={props.close} type="button" className="btn-close" data-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
)
}

export default Alert
