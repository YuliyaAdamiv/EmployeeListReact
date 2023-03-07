import './Home.style.css'
import { useState } from 'react';
import {IEmployee, dummyEmpolyeeList, PageEnum} from './Employee.type'
import EmpolyeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
const Home =()=>{
const [empolyeeList, setEmployeeList]=useState(dummyEmpolyeeList as IEmployee[]);
const [shownPage, setShownPage] = useState(PageEnum.list)
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
    return <div>
        <article className='article-header'>
            <header >
            <h1>React Simple Application</h1>
            </header>
        </article>
        <section className='section-content'>
            {shownPage===PageEnum.list&&(<div>
            <input type='button' value='Add Employee' onClick={onAddEmployeeclickHnd} className='add-employee-btn'/>
                <EmpolyeeList list={empolyeeList} onDeleteClick={deleteEmployee}/></div>)}
                {shownPage===PageEnum.add&& <AddEmployee onBackButtonClickHnd={shownListPage} onSubmitClick={addEmployee}/>}
            
        </section>
           
    </div>
}

export default Home;