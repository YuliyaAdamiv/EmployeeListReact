import { useState } from 'react'
import { IEmployee } from '../Types/Employee.type';
import '../Form/EmployeeForm.style.css'
type Props={
onBackButtonClickHnd: ()=>void;
onSubmitClick:(data:IEmployee)=>void;
}
const AddEmployee=(props: Props) =>{
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [email, setEmail]=useState('');
    const onFirstNameChange=(e:any) =>{
        setFirstName(e.target.value)
    }
    const onLastNameChange=(e:any) =>{
        setLastName(e.target.value)
    }
    const onEmailChange=(e:any) =>{
        setEmail(e.target.value)
    }
    const onSubmitClickHnd=(e:any) =>{
        e.preventDefault();
    const data:IEmployee={
    id:new Date().toJSON().toString(),
    firstName:firstName,
    lastName:lastName,
    email:email

}
onSubmitClick(data);
onBackButtonClickHnd();
    }
    const {onBackButtonClickHnd, onSubmitClick}=props;
    return (
    <div className="form-container">
        <div>
            <h3>Add Employee Form</h3>
        </div>
       <form onSubmit={onSubmitClickHnd}>
        <div>
            <label>First Name : </label>
            <input type="text" value={firstName} onChange={onFirstNameChange}/>
        </div>
        <div>
            <label>Last Name : </label>
            <input type="text" value={lastName} onChange={onLastNameChange}/>
        </div>
        <div>
            <label>Email Add. : </label>
            <input type="text" value={email} onChange={onEmailChange}/>
        </div>
        <div>
            <input type='button' value='Back' onClick={onBackButtonClickHnd}/>
            <input type='submit' value='Add Empoloyee'/>
        </div>
       </form>
    </div>
)}
export default AddEmployee;