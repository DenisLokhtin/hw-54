import React from 'react';

const Cell = (props) => {
        return (
            <div onClick={props.open} id={2} className={props.classes}> </div>
        )
};

export default Cell;