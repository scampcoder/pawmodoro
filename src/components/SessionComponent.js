import React from 'react';

function Session(props) {
    return (
        <React.Fragment>
            <button>-</button>
            <p>{props.sessionLength}</p>
            <button>+</button>
        </React.Fragment>
    );
}

export default Session;