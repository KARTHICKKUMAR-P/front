import React from "react";
import Halfboil from "./Halfboil";

const Egg = (props) => {
    return (
        <div>
            <h2>Egg {props.name}</h2>
            <Halfboil name={props.name} />
        </div>
    );
}

export default Egg;
