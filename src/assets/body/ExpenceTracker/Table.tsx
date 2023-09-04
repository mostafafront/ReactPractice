interface Expense {
  id: number;
  Description: string;
  Amount: number;
  category: string;
}

interface Props {
  expense: Expense[];
  deleteItem: (id: number) => void
}



export default function Table(props: Props) {

    if(props.expense.length === 0){
        return null
    }

  return (
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
          {props.expense.map((item) => (
            <tr key={item.id}>
              <td>{item.Description}</td>
              <td>${item.Amount}</td>
              <td>{item.category}</td>
              <td>
                <button className={"btn btn-outline-danger"} onClick={() => props.deleteItem(item.id)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>total</td>
            <td colSpan={3}>${props.expense.reduce((acc, item) => acc + item.Amount, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
