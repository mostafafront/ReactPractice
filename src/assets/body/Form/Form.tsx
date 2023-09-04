// import {Simulate} from "react-dom/test-utils";
// import submit = Simulate.submit;
// import {FormEvent, useState} from "react";
// import {FormEvent} from "react";
import {FieldValues, useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    discription: z.string({invalid_type_error:'please Fill the input⛔'}).min(3,{message: "Allowd chracter is 3⚠"}),
    Amount: z.number({invalid_type_error: 'Amount is required⛔'}),
    category: z.string({invalid_type_error: 'category is required⛔'})
})

export default function Form() {
    
    
    const {register, handleSubmit, formState} = useForm<FormData>({resolver: zodResolver(schema)})
    
    type FormData = z.infer<typeof schema>
    function getData(data:FieldValues) {
        console.log(data)
    }
    
    return (
        <div>
            <form className={"w-50 d-flex flex-column text-start"} onSubmit={handleSubmit(getData)}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Discription</label>
                    <input
                        {...register('discription')}
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="discription"/>
                    {formState.errors.discription &&
                        <p className={"text-danger"}>{formState.errors.discription.message}</p>}
                    
                    </div>
                
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea2" className="form-label">Amount</label>
                    <input
                        {...register('Amount', {valueAsNumber: true})}
                           type="number"
                           className="form-control"
                           id="exampleFormControlInput2"
                           placeholder="Amount"/>
                    {formState.errors.Amount &&
                        <p className={"text-danger"}>{formState.errors.Amount.message}</p>}
                </div>
                
                    <label className="form-label">category</label>
                <select id={'select'} className="form-select" aria-label="Default select example">
                    <option value="0"></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <br/>
                <button type={"submit"} className={"btn btn-primary"}>submit</button>
            </form>
        </div>
    );
}