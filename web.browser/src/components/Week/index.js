import React from 'react';

const Week = ({title, categories}) => {
    return (
        <div>
            <p>{title}</p>
            {categories.map((category, i) => (
                <li key={i}>{category}</li>
            ))}
        </div>
    )

}

export default Week;