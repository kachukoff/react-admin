import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {[
        "An Important Question",
        "Another Important Question",
        "Your Favorite Question",
        "Some Random Question",
        "The Final Question",
      ].map((title) => (
        <Accordion defaultExpanded key={title} className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h5"
              sx={{ color: "var(--green-accent-500)" }}
            >
              {title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "var(--grey-300)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              beatae sequi tempora eum exercitationem odio mollitia repellat
              tenetur quis soluta vel consequuntur laboriosam maxime debitis
              reiciendis sunt qui, aliquam maiores.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;