import React, {useState, useEffect} from 'react';
import CreateJob from '../modals/CreateJob'

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [companyList, setCompanyList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("companyList")
        if(arr){
            let obj = JSON.parse(arr)
            setCompanyList(obj)
        }
    }, [])

    const toggle = () => {
        setModal(!modal);
    }

    const companyStask = (job) => {
        let tempList = companyList;
        tempList.push(job);
        localStorage.setItem("companyList",JSON.stringify(tempList))
        setCompanyList(companyList);
        setModal(false);
    }
    return (
      <div className="body">
        <div className="header text-center">
            <h1>WISHLIST</h1>
            <h5>{}JOBS</h5>
            <button className="btn btn-light btn-lg mt-5" onClick = {() => setModal(true)}> + </button>
        </div>

        <div className="task-container">
            {companyList.map((obj) => <li>{obj.company}</li>)}
        </div>

        <CreateJob toggle={toggle} modal={modal} stack={companyStask}/>
      </div>
    )
}

export default TodoList
