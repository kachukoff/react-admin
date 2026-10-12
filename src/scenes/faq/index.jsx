import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const { t } = useTranslation();
  const faqs = ["q1", "q2", "q3", "q4", "q5"];
  
  return (
    <Box m="20px">
      <Header title="faq.title" subtitle="faq.subtitle" />

      {faqs.map((key) => (
        <Accordion defaultExpanded key={key} className="faq-accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="h5"
              sx={{ color: "var(--green-accent-500)" }}
            >
              {t(`faq.${key}`)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "var(--grey-300)" }}>
              {t(`faq.a_${key}`)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;