import './Home.style.css'
import { useEffect, useState } from 'react';
import {IEmployee, dummyEmpolyeeList, PageEnum} from '../Types/Employee.type'
import EmpolyeeList from '../List/EmployeeList';
import AddEmployee from '../Add/AddEmployee';
import EditEmployee from '../Edit/EditEmployee';
const Home =()=>{
const [empolyeeList, setEmployeeList]=useState(dummyEmpolyeeList as IEmployee[]);
const [shownPage, setShownPage] = useState(PageEnum.list)
const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

useEffect(() => {
    const listInString=window.localStorage.getItem("employeeList");
    if(listInString){
        _setEmployeeList(JSON.parse(listInString))
    }
}, [])
const onAddEmployeeclickHnd=()=>{
    setShownPage(PageEnum.add);
}
const shownListPage=()=>{
    setShownPage(PageEnum.list);
}
const addEmployee=(data:IEmployee)=>{
    _setEmployeeList([...empolyeeList, data]);
}
const deleteEmployee=(data:IEmployee)=>{
    const indexofDelete=empolyeeList.indexOf(data);
    const tempList=[...empolyeeList]
    tempList.splice(indexofDelete,1);
    setEmployeeList(tempList);
}
const onEditEmployeeData=(data:IEmployee)=>{
    setShownPage(PageEnum.edit);
    setDataToEdit(data)
}
const updateData=(data:IEmployee)=>{
    const filteredData=empolyeeList.filter(x=>x.id===data.id)[0];
    const indexOfRecord=empolyeeList.indexOf(filteredData);
    const tempData=[...empolyeeList];
    tempData[indexOfRecord]=data;
    setEmployeeList(tempData);
}
const _setEmployeeList=(list:IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem('employeeList', JSON.stringify(list))
}
    return <div>
        <article className='article-header'>
            <header >
            <h1>React Simple Application</h1>
            </header>
        </article>
        <section className='section-content'>
            {shownPage===PageEnum.list&&(<div>
            <input type='button' value='Add Employee' onClick={onAddEmployeeclickHnd} className='add-employee-btn'/>
                <EmpolyeeList list={empolyeeList} onDeleteClick={deleteEmployee} onEdit={onEditEmployeeData}/></div>)}
                {shownPage===PageEnum.add&& <AddEmployee onBackButtonClickHnd={shownListPage} onSubmitClick={addEmployee}/>}
            {shownPage===PageEnum.edit && <EditEmployee data={dataToEdit} onBackButtonClickHnd={shownListPage} onUpdateClickHnd={updateData}/>}
        </section>
           
    </div>
}

export default Home;