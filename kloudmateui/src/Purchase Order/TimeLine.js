import React, { useState, useEffect } from "react";
import "./timelinestyle.css";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import moment from "moment/moment";

export default function TimeLine() {
    const [timelineData, setTimelineData] = useState([]);
    const bigParentSpanId = "47d26bd0c4b125f2";
    const bigParentStartTime = moment("2023-06-06T14:45:59.486000128Z");
    const bigParentDuration = 1848;

    const getApiData = () => {
        axios
            .get(
                "https://gist.githubusercontent.com/amitava82/cae59e03c4ca584335dedd8dcd102405/raw/e4fbe2a5209886f27bbaaf28584c06b5c2d3a533/spans.json"
            )
            .then((res) =>
                setTimelineData(
                    res.data.spans.sort((a, b) => a.startTime.localeCompare(b.startTime))
                )
            )
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getApiData();
    }, []);

    const calculateStartPercent = (startTime) => {
        const diff = moment(startTime).diff(bigParentStartTime);
        return Math.ceil((100 * diff) / bigParentDuration);
    };

    const calculateWidthPercent = (duration) => {
        return Math.ceil((100 * (duration / 1000000)) / bigParentDuration);
    };

    const generateDifferetRGB = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    const renderTreeItems = (data, parentSpanId) => {
        return data.map((item, index) => {
            if (item.parentSpanId === parentSpanId) {
                const startPercent = calculateStartPercent(item.startTime);
                const widthPercent = calculateWidthPercent(item.duration);
                const barColor = generateDifferetRGB();
                if (
                    timelineData.find((findItem) => findItem.parentSpanId === item.spanId)
                ) {
                    return (
                        <TreeItem
                            key={index}
                            nodeId={`node-${item.spanId}`}
                            label={
                                <div
                                    style={{ display: "flex", gap: "10px", alignItems: "center" }}
                                >
                                    <span
                                        style={{
                                            fontSize: "17px",
                                            color: "rgb(66, 82, 110)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.attrs["service.name"]}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(66, 82, 110)",
                                        }}
                                    >{`HTTP ${item.attrs["http.method"]}`}</span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(155, 161, 175)",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {`${item.attrs["http.path"] === undefined
                                            ? item.attrs["host.name"]
                                            : item.attrs["http.path"]
                                            }`}
                                    </span>
                                    <ProgressBar
                                        start={`${startPercent}%`}
                                        width={`${widthPercent}%`}
                                        color={`${barColor}`}
                                    />
                                </div>
                            }
                        >
                            {renderTreeItems(data, item.spanId)}
                        </TreeItem>
                    );
                } else {
                    return (
                        <TreeItem
                            key={index}
                            nodeId={`node-${item.spanId}`}
                            label={
                                <div
                                    style={{ display: "flex", gap: "10px", alignItems: "center" }}
                                >
                                    <span
                                        style={{
                                            fontSize: "17px",
                                            color: "rgb(66, 82, 110)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.attrs["service.name"]}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(66, 82, 110)",
                                        }}
                                    >
                                        {item.operationName === "mongoose.orders.deleteOne"
                                            ? `${item.attrs["db.system"]} ${item.attrs["db.operation"]}`
                                            : `HTTP ${item.attrs["http.method"]}`}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(155, 161, 175)",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        {item.operationName === "mongoose.orders.deleteOne"
                                            ? `${item.attrs["db.name"]}`
                                            : `${item.attrs["host.name"]}`}
                                    </span>
                                    <ProgressBar
                                        start={`${startPercent}%`}
                                        width={`${widthPercent}%`}
                                        color={`${barColor}`}
                                    />
                                </div>
                            }
                        />
                    );
                }
            }
            return null;
        });
    };

    return (
        <div className="main">
            <div className="content-block">
                <p>Timeline</p>
                <div style={{ display: "flex", width: "100vw" }}>
                    <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        sx={{ flex: 1 }}
                    >
                        <TreeItem
                            nodeId="root"
                            label={
                                <div
                                    style={{ display: "flex", gap: "10px", alignItems: "center" }}
                                >
                                    <span
                                        style={{
                                            fontSize: "17px",
                                            color: "rgb(66, 82, 110)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        orders-service
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(66, 82, 110)",
                                        }}
                                    >
                                        HTTP
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(66, 82, 110)",
                                            fontWeight: 500,
                                        }}
                                    >
                                        DELETE
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "12px",
                                            color: "rgb(155, 161, 175)",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        /purchase-order
                                    </span>
                                    <ProgressBar start={"0%"} width={"100%"} color={"red"} />
                                </div>
                            }
                        >
                            {renderTreeItems(timelineData, bigParentSpanId)}
                        </TreeItem>
                    </TreeView>
                </div>
            </div>
            <div className="timeline-block">
                <p>0ms</p>
                <p>500ms</p>
                <p>1000ms</p>
                <p>1500ms</p>
                <p>1848ms</p>
            </div>
        </div>
    )
}