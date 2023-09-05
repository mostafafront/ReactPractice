import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import Categories from "./Categories.tsx";



    const schema = z.object({
        Description: z.string().min(3, {message: "minLength Allowd charactor is 3"}),
        Amount: z.number({invalid_type_error: "Amount is required!"}).min(0.01, {message: "minLength Allowd Amount is 0.01"}),
        Category: z.enum(Categories,
            {errorMap: () => ({message: "Category is required!"})})
        
    });
    
    type FormData = z.infer<typeof schema>
    

interface Props{
    submitF : (data: FormData) => void
}

export default function FormExpense(props: Props) {
    
    
    const {register, handleSubmit, formState, reset} = useForm<FormData>({resolver: zodResolver(schema)});
    
    
    return (
        <div>
            <form className={"w-50 d-flex flex-column text-start"} onSubmit={handleSubmit(data => {
                props.submitF(data);
                reset()
            })}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Discription</label>
                    <input
                        {...register("Description")}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="discription"/>
                    {formState.errors.Description &&
                        <p className={"text-danger pt-1"}>{formState.errors.Description.message}</p>}
                </div>
                
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea2" className="form-label">Amount</label>
                    <input
                        {...register("Amount", {valueAsNumber: true})}
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Amount"/>
                    {formState.errors.Amount && <p className={"text-danger pt-1"}>{formState.errors.Amount.message}</p>}
                </div>
                
                <label className="form-label">Category</label>
                <select {...register("Category")} id={"select"} className="form-select"
                        aria-label="Default select example">
                    
                    <option value=""></option>
                    {Categories.map(item => <option key={item} value={item}>{item}</option>)}
                
                </select>
                {formState.errors.Category && <p className={"text-danger pt-1"}>{formState.errors.Category.message}</p>}
                
                
                <button type={"submit"} className={"btn btn-primary mt-3"}>submit</button>
            </form>
        </div>
    );
}