import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Stack } from "@mui/material";
import { useState } from "react";

const AccordionPage = () => {
  const [expanded, setExpanded] = useState("first");
  return (
    <Stack mt={3}>
      <Accordion
        expanded={expanded === "first"}
        onClick={() => setExpanded("first")}>
        <AccordionSummary 
        expandIcon={<ExpandMore/>}>First Accordion</AccordionSummary>
        <AccordionDetails>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quis pariatur consequuntur, iste nulla alias eligendi aliquid earum,
          dolorum temporibus modi vero adipisci veritatis molestiae dicta
          eveniet optio ratione ipsum. Deserunt ipsam rerum corrupti quam
          laboriosam ea et ipsum. Quae fugiat exercitationem, placeat in commodi
          ullam molestiae ducimus animi sit.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "second"}
        onClick={() => setExpanded("second")}
      >
        <AccordionSummary expandIcon={<ExpandMore/>}>Third Accordion</AccordionSummary>
        <AccordionDetails>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quis pariatur consequuntur, iste nulla alias eligendi aliquid earum,
          dolorum temporibus modi vero adipisci veritatis molestiae dicta
          eveniet optio ratione ipsum. Deserunt ipsam rerum corrupti quam
          laboriosam ea et ipsum. Quae fugiat exercitationem, placeat in commodi
          ullam molestiae ducimus animi sit.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "third"}
        onClick={() => setExpanded("third")}
      >
        <AccordionSummary expandIcon={<ExpandMore/>}>Second Accordion</AccordionSummary>
        <AccordionDetails>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quis pariatur consequuntur, iste nulla alias eligendi aliquid earum,
          dolorum temporibus modi vero adipisci veritatis molestiae dicta
          eveniet optio ratione ipsum. Deserunt ipsam rerum corrupti quam
          laboriosam ea et ipsum. Quae fugiat exercitationem, placeat in commodi
          ullam molestiae ducimus animi sit.
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};

export default AccordionPage;
