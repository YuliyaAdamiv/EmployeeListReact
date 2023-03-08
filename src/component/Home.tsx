import './Home.style.css'
import { useState } from 'react';
import {IEmployee, dummyEmpolyeeList, PageEnum} from './Employee.type'
import EmpolyeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import EditEmployee from './EditEmployee';
const Home =()=>{
const [empolyeeList, setEmployeeList]=useState(dummyEmpolyeeList as IEmployee[]);
const [shownPage, setShownPage] = useState(PageEnum.list)
const [dataToEdit, setDataToEdit] = useState({} as IEmployee)
const onAddEmployeeclickHnd=()=>{
    setShownPage(PageEnum.add);
}
const shownListPage=()=>{
    setShownPage(PageEnum.list);
}
const addEmployee=(data:IEmployee)=>{
    setEmployeeList([...empolyeeList, data]);
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