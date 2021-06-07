import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Createjob = ({modal, toggle}) => {
    const [companyName, setcompany] = useState('');
    const [jobTitle, setjobTitle] = useState('');

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add a job</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group mb-2">
                        <input type="text" placeholder="Company Name" className="form-control" value={companyName}/>
                    </div>
                    <div className="form-group mt-3 mb-3">
                        <input type="text" placeholder="Job Title"className="form-control" value={jobTitle}/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={toggle}>Continue</Button>{' '}
            </ModalFooter>
      </Modal>
    )
}

export default Createjob
