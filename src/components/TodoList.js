import React, {useState} from 'react';
import CreateJob from '../modals/CreateJob'

const TodoList = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    return (
      <div className="body">
        <div className="header text-center">
            <h1>WISHLIST</h1>
            <h5>{}JOBS</h5>
            <button className="btn btn-light btn-lg mt-5" onClick = {() => setModal(true)}> + </button>
        </div>

        <div>

        </div>

        <CreateJob toggle = {toggle} modal = {modal} />
      </div>
    )
}

export default TodoList
