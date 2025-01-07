import React from "react";
import Stomach from "./Stomach";

const Hen = (props) => {
    return (
        <div>
            <h2>Hen {props.name}</h2>
            <Stomach name={props.name} />
        </div>
    );
}

export default Hen;
