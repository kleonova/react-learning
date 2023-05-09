import React, { useEffect, useState } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

MinMax.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func
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

    function handleTestChange(val) {
        console.log(val);
    }

    return (
        <InputGroup className="mb-3" size="sm" style={{width: "180px"}}>
            <Button 
                variant="outline-secondary" 
                onClick={ dec }
                disabled={value <= min}
            >
                -
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                value={ counterValue }
                onChange={ handleChange }
                onKeyDown={ handleTestChange }
                onBlur={ handleTestChange }
            />
            <Button 
                variant="outline-secondary" 
                onClick={ inc } 
                disabled={value >= max}
            >
                +
            </Button>
        </InputGroup>
    );
}

export default MinMax;