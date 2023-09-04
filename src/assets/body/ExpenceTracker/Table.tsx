

interface Expense{
    id: number,
    Description: string,
    Amount: number,
    category: string
}

interface Props{
    expense: Expense[]
}

export default function Table(props : Props){
    
    
    
    
    return(
        <div>
            
            <table className="table table-bordered w-50">
                <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                
                {props.expense.map((item) =>
                    <tr>
                    <td>{item.id}</td>
                    <td>${item.Amount}</td>
                    <td>{item.category}</td>
                    <td>
                        <button className={'btn btn-outline-danger'}>delete</button>
                    </td>
                </tr>)}
                
                </tbody>
                
                <tfoot>
                    <tr>
                    <td>total</td>
                    <td colSpan={3}>${5.00}</td>
                    </tr>
                </tfoot>
                
            </table>
            
        </div>
    )
}