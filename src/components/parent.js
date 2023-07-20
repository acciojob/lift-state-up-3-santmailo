import React from "react";
import Child from "./child";

const Parent = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const [count, setCount] = React.useState(1);
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child bg="brown" count={1}  setSelectedOption={setSelectedOption} />
            <Child bg="yellow" count={2}  setSelectedOption={setSelectedOption} />
            <p>Selected Option: {selectedOption}</p>
        </div>
    )
}

export default Parent;