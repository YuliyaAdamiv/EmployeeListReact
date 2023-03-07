import { IEmployee } from './Employee.type';
import './EmployeeList.style.css'


type Props={
    list:IEmployee[],
    onDeleteClick:(data:IEmployee) =>void;
}
const EmpolyeeList =(props:Props) =>{
    const {list, onDeleteClick} = props;
    return <div>
        <article className="list-header">
            <h3>Employee List</h3>
        </article>
        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  {list.map(employee=>{
    console.log(employee)
    return  <tr key={employee.id}>
    <td>{`${employee.firstName} ${employee.lastName}`}</td>
    <td>{employee.email}</td>
    <td><div>
        <input type='button' value='View'/>
        <input type='button' value='Edit'/>
        <input type='button' value='Delete' onClick={()=>onDeleteClick(employee)}/>
        </div></td>
  </tr>
  })}
 
  
</table>

    </div>;
}
export default EmpolyeeList;