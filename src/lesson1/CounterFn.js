import React, { useState } from "react";
import PropTypes from 'prop-types';

function CounterFn({ min, max }) {
    // magic сокрытие реализации
    // useState - is hooki - возвращает массив из объекта и функции изменения этого объекта
    let [counterValue, setCounterValue] = useState(min);
    let [inputValue, setInputValue] = useState(min);

    console.log("init CounterFn");

    // функция будет вызываться каждый раз при изменении компонента :(
    function increnment() {
        console.log("CounterFn: call increment function");

        if(counterValue < max) {
            setCounterValue(counterValue+1)
        }
    }

    function decrement() {
        console.log("CounterFn: call decrement function");

        if(counterValue > min) {
            setCounterValue(counterValue-1);
        }
    }

    function handleChange(event) {
        let newValue = event.target.value;
        console.log("handleChange ", newValue);

        newValue = newValue > max ? max : newValue < min ? min : newValue;  
        setCounterValue(newValue);
    }

    return (
        <div>
            <form>
                <label>
                    <input type="text" name="name" value={ counterValue } onChange={ handleChange } />
                </label>
            </form>

            <button type="button" onClick={ decrement }>-</button>
            <button type="button" onClick={ increnment }>+</button>
        </div>
    );
}

CounterFn.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default CounterFn;