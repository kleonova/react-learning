import React, { useState } from "react";

function CounterFn({ min, max }) {
    // magic сокрытие реализации
    // useState - is hooki - возвращает массив из объекта и функции изменения этого объекта
    let [counterValue, setCounterValue] = useState(1);
    
    console.log("init CounterFn");

    // функция будет вызываться каждый раз при изменении компонента :(
    function increnment() {
        console.log("CounterFn: call increment function");

        if(counterValue < max) {
            setCounterValue(counterValue+1)
        }
    }

    return <div>
        <span>{ counterValue }</span>
        <button type="button" onClick={ increnment }>+</button>
    </div>;
}

export default CounterFn;