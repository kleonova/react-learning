import { useState } from "react";
import ModalCard from "../components/ModalCard";

export default function() {    
    let [ isOpen, setOpen ] = useState(false);

    return (
        <>
            <h1>Lesson #3</h1>
            <hr />
            <button onClick={() => setOpen(!isOpen)}>{isOpen ? 'Close modal' : 'Open modal' }</button>
            { isOpen && 
                <ModalCard 
                    header='My modal'
                    onClose={() => setOpen(false)} 
                /> 
            }
        </>
    );
}