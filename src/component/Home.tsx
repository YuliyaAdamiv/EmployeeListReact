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
    return <div>
        <article className='article-header'>
            <header >
            <h1>React Simple Application</h1>
            </header>
        </article>
        <section className='section-content'>
            {shownPage===PageEnum.list&&(<div>
            <input type='button' value='Add Employee' onClick={onAddEmployeeclickHnd}/>
                <EmpolyeeList list={empolyeeList}/></div>)}
                {shownPage===PageEnum.add&& <AddEmployee onBackButtonClickHnd={shownListPage} onSubmitClick={addEmployee}/>}
            
        </section>
           
    </div>
}

export default Home;