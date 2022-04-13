import React from "react";
import "../../App.css";

import { Box } from "@mui/material";
import ErDiagram from "../../Components/ErDiagram";

const SchemaPage = () => {
  return (
    <Box height={["724px", null, null, 600]} className="schemaPage">
      <ErDiagram />
    </Box>
  );
};

export default SchemaPage;
