import React from 'react';

function Break(props) {
    return (
        <React.Fragment>
            <button>-</button>
            <p>{props.breakLength}</p>
            <button>+</button>
        </React.Fragment>
    );
}

export default Break;