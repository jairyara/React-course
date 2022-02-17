import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value, title }) => {

    const [ counter, setCounter ] = useState( value );


    const handleAdd = () => {
        // setCounter( counter + 1);
        setCounter((counter) => counter + 1);
    }

    const handleReset = () => {
        setCounter(() => value);
    }

    const handleSubtract = () => {
        setCounter((counter) => counter - 1);
    }


    return (
        <>
            <h1>{title}</h1>
            <h2>{counter}</h2>
            <button onClick={ handleSubtract } className="minus"> -1</button>
            <button onClick={ handleReset } className="reset">Reset</button>
            <button onClick={ handleAdd } className="add">+1</button>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    title: 'Counter App',
    value: 0
}

export default CounterApp;
