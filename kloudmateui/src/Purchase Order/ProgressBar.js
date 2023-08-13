import React from "react";

function ProgressBar(props) {
    const outerBarStyle = {
        color: "red",
        border: "1px solid white",
        backgroundColor: "white",
        width: "calc(100vw - 400px)",
        height: "10px",
        marginLeft: "20px",
    };

    const innerBarWidth = `${props.width}`; // Change this to adjust the inner bar width
    const marginLeft = `${props.start}`;

    const innerBarStyle = {
        color: "white",
        backgroundColor: `${props.color}`,
        width: innerBarWidth,
        height: "10px",
        marginTop: "-1px",
        marginLeft: marginLeft,
    };

    return (
        <div style={outerBarStyle}>
            <div style={innerBarStyle}></div>
        </div>
    );
}

export default ProgressBar;