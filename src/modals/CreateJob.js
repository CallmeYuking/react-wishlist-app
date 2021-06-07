import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Createjob = ({modal, toggle, stack}) => {
    const [companyName, setCompany] = useState('');
    const [jobTitle, setJobTitle] = useState('');

    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target;
        if (name === "company"){
            setCompany(value)
        }else{
            setJobTitle(value)
        }
    }

    const handlerStack = () => {
        let wishCompany = {};
        wishCompany["company"] = companyName;
        wishCompany["job"] = jobTitle;
        stack(wishCompany); 
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add a job</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group mb-2">
                        <input type="text" placeholder="Company Name" className="form-control" value={companyName} onChange={handleChange} name="company"/>
                    </div>
                    <div className="form-group mt-3 mb-3">
                        <input type="text" placeholder="Job Title"className="form-control" value={jobTitle} onChange={handleChange} name="job"/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handlerStack}>Continue</Button>{' '}
            </ModalFooter>
      </Modal>
    )
}

export default Createjob
