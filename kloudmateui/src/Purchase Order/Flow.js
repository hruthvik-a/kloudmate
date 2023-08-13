import React from 'react'
import ReactFlow, {
    MarkerType, addEdge,
    useNodesState,
    useEdgesState,
    Background,
    ReactFlowProvider,
    useReactFlow,
    Panel,
    Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Http Client Mozilla' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: 'Service Orders-Service' } },
    { id: '3', position: { x: 10, y: 200 }, data: { label: 'Service Stock-Service' } },
    { id: '4', position: { x: -300, y: 200 }, data: { label: 'Service Authentication' } },
    { id: '5', position: { x: 300, y: 200 }, data: { label: 'Mongo-db order db' } },
    { id: '6', position: { x: -300, y: 350 }, data: { label: 'HTTP aspect' } },
    { id: '7', position: { x: 10, y: 350 }, data: { label: 'mongodb stock-db' } },
];


const initialEdges = [
    {
        id: 'e1-2', source: '1', target: '2',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },
    {
        id: 'e1-3', source: '2', target: '3',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },
    {
        id: 'e1-4', source: '2', target: '4',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },
    {
        id: 'e1-5', source: '2', target: '5',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },
    {
        id: 'e1-6', source: '4', target: '6',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },
    {
        id: 'e1-7', source: '3', target: '7',
        markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
            color: 'grey',
        },
        // label: 'marker size and color',
        style: {
            strokeWidth: 1.5,
            stroke: 'grey',
        },
    },

];

function Flow(props) {


    return (
        <div style={{ width: '50vw', height: '100%', backgroundColor: '#F6F8FA' }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
                attributionPosition='bottom-left'
            >
                <Controls showInteractive={false}
                // style={{marginBottom:'240px'}}
                />
                {/* <Background /> */}
            </ReactFlow>
        </div>
    )
}



export default Flow;