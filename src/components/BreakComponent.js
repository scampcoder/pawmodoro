import React from 'react';

function Break(props) {
    function decreaseCounter() {
        if(props.breakLength === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if(props.breakLength === 30) {
            return;
        }
        props.increaseBreak();
    }

    return (
        <section>
            <h4>Cat Nap</h4>
            <section className="interval-container">
                <button disabled={props.isRunning === true ? "disabled" : ''} onClick={decreaseCounter}>-</button>
                <p>{props.breakLength}</p>
                <button disabled={props.isRunning === true ? "disabled" : ''} onClick={increaseCounter}>+</button>
            </section>
        </section>
    );
}

export default Break;