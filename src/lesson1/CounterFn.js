import React, { useState } from "react";
import PropTypes from 'prop-types';

function CounterFn({ min, max }) {
    // magic сокрытие реализации
    // useState - is hooki - возвращает массив из объекта и функции изменения этого объекта
    let [counterValue, setCounterValue] = useState(min);

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
            setCounterValue(counterValue-1)
        }
    }

    return (
        <div>
            <button type="button" onClick={ decrement }>-</button>
            <span>{ counterValue }</span>
            <button type="button" onClick={ increnment }>+</button>
        </div>
    );
}

CounterFn.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default CounterFn;