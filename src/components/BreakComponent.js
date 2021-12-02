import React from 'react';

function Break(props) {
    return (
        <section>
            <h4>Cat Nap</h4>
            <section className="interval-container">
                <button>-</button>
                <p>{props.breakLength}</p>
                <button>+</button>
            </section>
        </section>
    );
}

export default Break;