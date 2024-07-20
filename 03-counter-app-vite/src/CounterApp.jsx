import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleMinus = () => {
        if (counter <= 0) return;
        setCounter(counter - 1);
    }

    const handleAdd = () => setCounter(counter + 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>Counter App</h1>
            <h2> {counter} </h2>
            <button onClick={handleMinus}>
                -1
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
            <button onClick={handleAdd}>
                +1
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
