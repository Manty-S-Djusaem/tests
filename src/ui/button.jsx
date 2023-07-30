import React from 'react';
import module from './button.module.scss'

function button(props) {
    return (
        <div className={module.main}>
            <button className={module.numbtn}>+996700777555</button>
        </div>
    );
}

export default button;