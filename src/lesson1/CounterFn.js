import React, { useState } from "react";
import PropTypes from 'prop-types';

function CounterFn({ min, max }) {
    // magic сокрытие реализации
    // useState - is hooki - возвращает массив из объекта и функции изменения этого объекта
    let [counterValue, setCounterValue] = useState(min);

    console.log("init CounterFn");

    function applyCurrent(num){
        console.log("applyCurrent", num);
        setCounterValue(Math.max(min, Math.min(max, num)));
    }

    let inc = () => applyCurrent(counterValue+1)
    let dec = () => applyCurrent(counterValue-1)
    
    function handleChange(event) {
        let newValue = +event.target.value;
        console.log("handleChange ", newValue);

        applyCurrent(newValue);
    }

    return (
        <div>
            <form>
                <label>
                    <input type="text" name="name" value={ counterValue } onChange={ handleChange } />
                </label>
            </form>

            <button type="button" onClick={ dec }>-</button>
            <button type="button" onClick={ inc }>+</button>
        </div>
    );
}

CounterFn.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default CounterFn;