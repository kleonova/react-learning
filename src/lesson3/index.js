import { useState } from "react";
import ModalCard from "../components/ModalCard";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function() {    
    let [ isOpenModal, openModal ] = useState(false);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="p-2">
            <h1>Lesson #3</h1>
            <hr />
            <div className="d-flex">
                <Button 
                    variant="primary" 
                    className="me-2"
                    onClick={() => openModal(!isOpenModal)}
                    >
                        {isOpenModal ? 'Close my modal' : 'Open my modal' }
                </Button>

                <Button 
                    variant="secondary" 
                    className=""
                    onClick={handleShow}
                >
                    Open bootstrap modal
                </Button>
            </div>

            { isOpenModal && 
                <ModalCard 
                    header='My modal'
                    onClose={() => openModal(false)} 
                >
                    some text
                </ModalCard> 
            }

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>    
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}