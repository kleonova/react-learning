import { useRef } from 'react';
import useClickOutSide from '../../hooks/useClickOutside';
import style from './style.module.css';

function ModalCard ({ header, onClose, children }) {  
    const ref = useRef();

    useClickOutSide(ref, onClose);

    return (
        <div id="modalWrapper" className={style.modal}>
            <div id="modalCard" className={style.card} ref={ref} >
                <div className={style.header}>
                    {header}
                    <button onClick={() => onClose()}>X</button>
                </div>
                <div className={style.main}>
                    { children }
                </div>
                <div className={style.footer}>footer</div>
            </div>
        </div>
    );
}

export default ModalCard;