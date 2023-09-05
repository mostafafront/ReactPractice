
import Categories from "./Categories.tsx";
interface Props{
    changeCategory: (value:string) => void
}
export default function Filter(props: Props) {
    
    return(
        <div className={'w-50'}>
            <select className="form-select" aria-label="Default select example" onChange={(event) => props.changeCategory(event.target.value)}>
                <option value='all'>All category</option>
                
                {Categories.map((item) => <option key={item} value={item}>{item}</option>)}
                
            </select>
        </div>
    )
}