import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  MenuItem,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

import { BsFillDiamondFill } from "react-icons/bs";
import { Handle } from "react-flow-renderer";
import { schema2 as schemaData } from "../../Configs/SchemaData";

// const Schema = ({ schemaData, title }) => {
const Schema2 = () => {
  return (
    <>
      <Handle type="source" position="top" />

      <Box
        style={{
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justiContent: "space-around",
          padding: 0,
        }}
      >
        <Accordion
          style={{
            backgroundColor: "#03DAC6",
            width: "180px",
            fontSize: "10px !important",
            margin: 0,
            padding: 0,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" color={"white"}>
              {"Product"}
            </Typography>
          </AccordionSummary>

          <AccordionDetails style={{}}>
            {schemaData.map((schema, index) => {
              const { name, className } = schema || {};

              return (
                <MenuItem key={index} style={{ color: "white" }}>
                  <Box>
                    <BsFillDiamondFill className={className} />
                    <span style={{ marginLeft: "5px", marginTop: "2px" }}>
                      {name}
                    </span>
                  </Box>
                </MenuItem>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Handle type="target" position="bottom" />
    </>
  );
};

export default Schema2;
