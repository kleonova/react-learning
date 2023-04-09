import React, { useState } from "react";
import PropTypes from 'prop-types';

function CounterFn({ min = 1, max = 100 }) {
    // magic сокрытие реализации
    // useState - is hooki - возвращает массив из объекта и функции изменения этого объекта
    // присвоение будет отработано только 1 раз, так как сменится ???
    let [counterValue, setCounterValue] = useState(min);

    function applyCurrent(num){
        console.log("applyCurrent", num);
        setCounterValue(Math.max(min, Math.min(max, num)));
    }

    let inc = () => applyCurrent(counterValue+1)
    let dec = () => applyCurrent(counterValue-1)
    
    function handleChange(event) {
        let newValue = parseInt(event.target.value);
        console.log("handleChange ", newValue);

        applyCurrent(isNaN(newValue) ? min : newValue);
    }

    return (
        <div>
            <button type="button" onClick={ dec }>-</button>
            <input type="text" name="name" value={ counterValue } onChange={ handleChange } />
            <button type="button" onClick={ inc }>+</button>
        </div>
    );
}

CounterFn.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default CounterFn;