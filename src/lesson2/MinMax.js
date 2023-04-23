import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

function MinMax({ min = 1, max, value, onChange }) {
    let [counterValue, setCounterValue] = useState(value);

    useEffect(() => {
        setCounterValue(value);
    }, [value]);

    function applyCurrent(num){
        let validValue = Math.max(min, Math.min(max, num));
        onChange(validValue);
    }

    let inc = () => applyCurrent(value + 1)
    let dec = () => applyCurrent(value - 1)
    
    function handleChange(event) {
        setCounterValue(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleRealChange();
        }
    }

    function handleRealChange() {
        let newValue = parseInt(counterValue);
        applyCurrent(isNaN(newValue) ? min : newValue);
    }

    return (
        <div>
            <button type="button" onClick={ dec }>-</button>
            <input 
                type="text" 
                name="name" 
                value={ counterValue } 
                onChange={ handleChange } 
                onKeyDown={ handleKeyDown }
                onBlur={ handleRealChange }
            />
            <button type="button" onClick={ inc }>+</button>
        </div>
    );
}



export default MinMax;