import React from "react";

function Images (props) {
return (
    <img src={props.src} className={props.className} alt={props.alt} style={props.style}/>
);
}

export default Images;