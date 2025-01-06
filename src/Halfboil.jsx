import React from "react";
import Hen from "./Hen";

const Halfboil = (props) => {
    return (
        <div>
            <h2>Halfboil {props.name}</h2>
            <Hen name={props.name} />
        </div>
    );
}

export default Halfboil;
