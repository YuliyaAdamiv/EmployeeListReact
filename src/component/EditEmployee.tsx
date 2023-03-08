import { IEmployee } from "./Employee.type";
import { useState } from 'react'
import './EmployeeForm.style.css'

type Props={
    data:IEmployee,
    onBackButtonClickHnd: ()=>void;
    onUpdateClickHnd: (data:IEmployee) => void;
}
const EditEmpolyee=(props:Props)=>{
    const{data, onBackButtonClickHnd, onUpdateClickHnd} = props;
    const [firstName, setFirstName]=useState(data.firstName);
    const [lastName, setLastName]=useState(data.lastName);
    const [email, setEmail]=useState(data.email);
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
    const updatedData:IEmployee={
    id:data.id,
    firstName:firstName,
    lastName:lastName,
    email:email

}
onUpdateClickHnd(updatedData);
onBackButtonClickHnd();
    }
    return <div className="form-container">
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
        <input type='submit' value='Update Empoloyee'/>
    </div>
   </form>
</div>
}
export default EditEmpolyee;