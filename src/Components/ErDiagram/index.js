import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import {
  defaultEdgeOptions,
  edges,
  elements,
  nodeColor,
  nodes,
  nodeTypes,
} from "../../Configs/chartData";
import Schema from "../Schema";
import Schema2 from "../Schema/schema2";

export default function ErDiagram() {
  const nodeTypes = {
    customNode: Schema,
    customNode2: Schema2,
  };

  return (
    <ReactFlow
      defaultEdgeOptions={defaultEdgeOptions}
      preventScrolling={false}
      // zoomOnScroll={false}
      fitView
      defaultNodes={nodes}
      defaultEdges={edges}
      nodeTypes={nodeTypes}
    >
      <Background
        variant="dots"
        color="black"
        className="ReactFlowBackGround"
      />
      <MiniMap
        nodeBorderRadius={8}
        nodeStrokeColor="#fff"
        nodeColor={nodeColor}
      />
      <Controls />
    </ReactFlow>
  );
}
