import React, {useState} from "react";
import MinMax from "../lesson3/MinMax";

export default function() {
    let [ value, setValue ] = useState(1);

    return (
        <>
            <h1>Lesson #3</h1>
            <hr />
            <MinMax max={100} value={value} onChange={newValue => setValue(newValue)}  />
        </>
    );
}