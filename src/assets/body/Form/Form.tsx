// import {Simulate} from "react-dom/test-utils";
// import submit = Simulate.submit;
import {FormEvent, useRef} from "react";

export default function Form() {
    
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null)
    
    const userObj = {
        name: '',
        age: 0
    }
    function submitHandler(event:FormEvent) {
        event.preventDefault()
        if(nameRef.current !== null)
        userObj.name = nameRef.current.value
        
        if(ageRef.current !== null)
        userObj.age = parseInt(ageRef.current.value)
        
        console.log(userObj);
    }
    
    return(
        <div>
            <form className={'w-50'} onSubmit={submitHandler}>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3 text-start">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Age</label>
                    <input ref={ageRef} type="number" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                
                <button type={"submit"} className={'btn btn-primary'}>submit</button>
            </form>
        </div>
    )
}