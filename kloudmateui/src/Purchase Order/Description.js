import React from "react";

function Description() {
    return (
        <div
            style={{
                width: "50vw",
                height: "100%",
                backgroundColor: "#F6F8FA",
                overflow: "hidden",
            }}
        >
            <div>
                <p>Trace Overview</p>
                Jun 6th 2023, 20:15:59
            </div>
            <hr />
            <div>
                3 Services used
                <p>authentication-service</p>
                <p>orders-service</p>
                <p>stock-service</p>
            </div>

            <hr />

            <div>
                <h5>PERFORMANCE</h5>

                <p>Execution Time:1.8s</p>

                <p>Longest Operation:DELETE/purchase-order-1.8S</p>
            </div>
        </div>
    );
}

export default Description;
