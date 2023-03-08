import { IEmployee } from './Employee.type';
import './EmployeeList.style.css'
import EmployeeModal from './EmployeeModal';
import { useState } from 'react';


type Props={
    list:IEmployee[],
    onDeleteClick:(data:IEmployee) =>void;
    onEdit: (data:IEmployee) =>void;
}
const EmpolyeeList =(props:Props) =>{
    const {list, onDeleteClick, onEdit} = props;
    const [shownModal, setShownModal]=useState(false);
    const [dataToShow, setDataToShow] =useState(null as IEmployee|null)
    const viewEmployee = (data:IEmployee)=>{
        setDataToShow(data)
        setShownModal(true);
    }
    const onCloseModal=()=>setShownModal(false);
   
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
        <input type='button' value='View' onClick={()=>viewEmployee(employee)}/>
        <input type='button' value='Edit' onClick={()=>onEdit(employee)}/>
        <input type='button' value='Delete' onClick={()=>onDeleteClick(employee)}/>
        </div></td>
  </tr>
  })}
 
  
</table>
{ shownModal && dataToShow !== null && (<EmployeeModal onClose={onCloseModal} data={dataToShow}/>)}

    </div>;
}
export default EmpolyeeList;