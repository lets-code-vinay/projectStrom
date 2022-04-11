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
import { data } from "../../Configs/SchemaData";

// const Schema = ({ schemaData, title }) => {
const Schema = () => {
  return (
    <Box
      style={{
        // width: ".5rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justiContent: "space-around",
        padding: 0,
      }}
      //   mx={3}
      //   my={3}
    >
      <Handle type="target" position="top" />

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
          <Typography variant="h6">{"title" || ""}</Typography>
        </AccordionSummary>

        <AccordionDetails style={{}}>
          {data.map((schemaData, index) => {
            const { name, className } = schemaData || {};

            return (
              <MenuItem key={index} style={{}}>
                <Box>
                  <BsFillDiamondFill className={className} />
                  <span style={{ marginLeft: "10px", marginTop: "2px" }}>
                    {name}
                  </span>
                </Box>
              </MenuItem>
            );
          })}
        </AccordionDetails>
      </Accordion>
      <Handle type="target" position="bottom" />
    </Box>
  );
};

export default Schema;
