import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = ({ title, subtitle }) => {
  const { t } = useTranslation();
  
  return (
    <Box sx={{ mb: "30px" }}>
      <Typography variant="h2" sx={{ color: "var(--grey-100)", fontWeight: "bold",
          mb: "5px",
        }}
      >
        {t(title)}
      </Typography>
      <Typography variant="h5" sx={{ color: "var(--green-accent-400)" }}>
        {t(subtitle)}
      </Typography>
    </Box>
  );
};

export default Header;