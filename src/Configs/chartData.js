export const defaultNodeOptions = {
  targetPosition: "left",
  sourcePosition: "right",
};

export const nodes = [
  {
    id: "A",
    position: {
      x: 330,
      y: 400,
    },
    data: {
      label: "A",
    },
    // type: "output",
    type: "customNode2",

    style: {
      width: 80,
      backgroundColor: "#ff2e8b",
      borderColor: "white",
      color: "white",
      fontWeight: "bold",
    },
    ...defaultNodeOptions,
  },
  // fitrs A--
  {
    id: "B",
    position: {
      x: 0,
      y: 250,
    },
    data: {
      label: "B",
    },
    type: "customNode",

    style: {
      width: 70,
      backgroundColor: "#7a4be7",
      borderColor: "white",
      color: "white",
      fontWeight: "bold",
    },
    ...defaultNodeOptions,
  },

  // C
  {
    id: "C",
    position: {
      x: 80,
      y: 450,
    },
    data: {
      label: "C",
    },
    type: "customNode",
    style: {
      width: 70,
      backgroundColor: "#a845d0",
      borderColor: "white",
      color: "white",
      fontWeight: "bold",
    },
    ...defaultNodeOptions,
  },

  // Categories
  {
    id: "D",
    position: {
      x: 400,
      y: 550,
    },
    data: {
      label: "D",
    },
    type: "customNode",
    style: {
      width: 40,
      backgroundColor: "#ca3fb9",
      borderColor: "red",
      color: "white",
      // fontWeight: "bold",
      // textTransform: "uppercase",
    },
    ...defaultNodeOptions,
  },
];

export const edges = [
  {
    id: "e1",
    source: "A",
    target: "B",
    type: "smoothstep",
    sourceHandle: "A",
    // animated: true,
    className: "normal-edge",
    zIndex: "-99",
  },

  /**
   * A --> Data
   */
  {
    id: "e2",
    source: "B",
    target: "C",
    type: "smoothstep",
    // animated: true,
    zIndex: "-99",
  },

  /**
   * Data --> Categories
   */
  {
    id: "e3",
    source: "C",
    target: "D",
    type: "smoothstep",
    animated: true,
    data: { name: "vinay" },
    zIndex: "-99",
  },
  {
    id: "e4",
    source: "D",
    target: "A",
    type: "smoothstep",
    zIndex: "-99",
  },
];

export const defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: "#BDC4CC", type: "smoothstep" },
};

export const nodeColor = ({ id }) =>
  nodes.find((n) => n.id === id).style.backgroundColor;

/**
 * -=--------it can be used also---------=-
 */
// export const elements = [
//   // 3rd -output
//   {
//     id: "A",
//     position: {
//       x: 330,
//       y: 350,
//     },
//     data: {
//       label: "A",
//     },
//     // type: "output",
//     type: "customNode",

//     style: {
//       width: 80,
//       backgroundColor: "#ff2e8b",
//       borderColor: "white",
//       color: "white",
//       fontWeight: "bold",
//     },
//     ...defaultNodeOptions,
//   },
//   // fitrs A--
//   {
//     id: "B",
//     position: {
//       x: 0,
//       y: 350,
//     },
//     data: {
//       label: "B",
//     },
//     type: "input",

//     style: {
//       width: 70,
//       backgroundColor: "#7a4be7",
//       borderColor: "white",
//       color: "white",
//       fontWeight: "bold",
//     },
//     ...defaultNodeOptions,
//   },

//   // C
//   {
//     id: "C",
//     position: {
//       x: 130,
//       y: 450,
//     },
//     data: {
//       label: "C",
//     },
//     type: "customNode",
//     style: {
//       width: 70,
//       backgroundColor: "#a845d0",
//       borderColor: "white",
//       color: "white",
//       fontWeight: "bold",
//     },
//     ...defaultNodeOptions,
//   },

//   // Categories
//   {
//     id: "D",
//     position: {
//       x: 200,
//       y: 550,
//     },
//     data: {
//       label: "D",
//     },
//     type: "customNode",
//     style: {
//       width: 40,
//       backgroundColor: "#ca3fb9",
//       borderColor: "red",
//       color: "white",
//       // fontWeight: "bold",
//       // textTransform: "uppercase",
//     },
//     ...defaultNodeOptions,
//   },

//   /**
//    * Edges---------------
//    */

//   {
//     id: "A-B",
//     source: "A",
//     target: "B",
//     type: "smoothstep",
//     // sourceHandle: "A",
//     animated: true,
//     className: "normal-edge",
//   },

//   /**
//    * A --> Data
//    */
//   {
//     id: "B-C",
//     source: "B",
//     target: "C",
//     type: "smoothstep",
//     animated: true,
//   },

//   /**
//    * Data --> Categories
//    */
//   {
//     id: "C-D",
//     source: "C",
//     target: "D",
//     type: "smoothstep",
//     animated: true,
//   },
//   {
//     id: "D-A",
//     source: "D",
//     target: "A",
//     type: "smoothstep",
//   },
// ];
