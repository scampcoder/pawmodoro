import React from 'react';

function Session(props) {
    return (
        <section>
            <h4>Work</h4>
            <section className="interval-container">
                <button>-</button>
                <p>{props.sessionLength}</p>
                <button>+</button>
            </section>
        </section>
    );
}

export default Session;