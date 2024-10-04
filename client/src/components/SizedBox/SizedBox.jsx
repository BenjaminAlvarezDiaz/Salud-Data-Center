import React from "react";
import "./SizedBox.css";

function SizedBox({ width, height }){
    const sizedBoxStyle = {
        width : width? width : '0px',
        height : height? height : '0px',
        background : 'transparent',
    }

    return(
    <div style={sizedBoxStyle}>
    </div>
    );
}

export default SizedBox;