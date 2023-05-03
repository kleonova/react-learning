import { useState } from "react";
import ModalCard from "../components/ModalCard";

export default function() {    
    let [ isOpenModal, openModal ] = useState(false);

    return (
        <>
            <h1>Lesson #3</h1>
            <hr />
            <button onClick={() => openModal(!isOpenModal)}>{isOpenModal ? 'Close modal' : 'Open modal' }</button>
            { isOpenModal && 
                <ModalCard 
                    header='My modal'
                    onClose={() => openModal(false)} 
                /> 
            }
        </>
    );
}