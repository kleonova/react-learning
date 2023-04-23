import React, { useState } from "react";
import PropTypes from 'prop-types';

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

function MinMax({ min = 1, max, value, onChange }) {
    function applyCurrent(num){
        let validValue = Math.max(min, Math.min(max, num));
        onChange(validValue);
    }

    let inc = () => applyCurrent(value + 1)
    let dec = () => applyCurrent(value - 1)
    
    function handleChange(event) {
        let newValue = parseInt(event.target.value);
        applyCurrent(isNaN(newValue) ? min : newValue);
    }

    return (
        <div>
            <button type="button" onClick={ dec }>-</button>
            <input type="text" name="name" value={ value } onChange={ handleChange } />
            <button type="button" onClick={ inc }>+</button>
        </div>
    );
}



export default MinMax;