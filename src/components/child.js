import React from "react";

const Child = (props) => {
    return (
        <div className={props.bg}>
            <h2>Child Component {props.count}</h2>
            <button onClick={(event) => props.setSelectedOption(`Option ${props.count}`)}>Option {props.count}</button>
        </div>
    )
}

export default Child;