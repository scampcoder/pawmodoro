import React from 'react';

function Session(props) {
    function decreaseCounter() {
        if(props.sessionLength === 1) {
            return;
        }
        props.decreaseSession();
    }

    function increaseCounter() {
        if(props.sessionLength === 90) {
            return;
        }
        props.increaseSession();
    }


    return (
        <section>
            <h4>Work</h4>
            <section className="interval-container">
                <button disabled={props.isRunning === true ? "disabled" : ''} onClick={decreaseCounter}>-</button>
                <p>{props.sessionLength}</p>
                <button disabled={props.isRunning === true ? "disabled" : ''} onClick={increaseCounter}>+</button>
            </section>
        </section>
    );
}

export default Session;