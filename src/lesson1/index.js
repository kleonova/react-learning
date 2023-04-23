import React from "react";
import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn";

const ContainerLesson1 = () => (
    <>
        <h1>Lesson #1</h1>
        <hr />
        <div>
            <h3>Классовый компонент</h3>
            <p>Максимальное значение counter - 5</p>
            <CounterClass max={5} />
        </div>
        <hr />
        <div>
            <h3>Функциональный компонент</h3>
            <p>После ввода хуков является приоритетным:)</p>
            <CounterFn min={1} max={5} />
            <CounterFn min={3} max={30} />
        </div>
    </>
);

export default ContainerLesson1;