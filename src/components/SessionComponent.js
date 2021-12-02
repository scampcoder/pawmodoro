import React from 'react';

function Session(props) {
    return (
        <section>
            <button>-</button>
            <p>{props.sessionLength}</p>
            <button>+</button>
        </section>
    );
}

export default Session;