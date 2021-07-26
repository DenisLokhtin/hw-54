import React from 'react';

const Cell = (props) => {
        let cellClass = ['cell'];

        return (
            <div onClick={props.open} id={2} className={cellClass.join(' ')}> </div>
        )
};

export default Cell;