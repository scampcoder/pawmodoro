import React from 'react';

function Break(props) {
    return (
        <section>
            <button>-</button>
            <p>{props.breakLength}</p>
            <button>+</button>
        </section>
    );
}

export default Break;