import React from "react";

export default function Saludar(props){
    console.log(props);
    return(
        <div>
            <h2>Hola, {props.name} . Tiene {props.edad} años</h2>
        </div>
    )

}