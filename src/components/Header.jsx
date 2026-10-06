import { Typography, Box } from "@mui/material";

const Header = ({ title, subtitle }) => {
  return (
    <Box sx={{ mb: "30px" }}>
      <Typography
        variant="h2"
        sx={{
          color: "var(--grey-100)",
          fontWeight: "bold",
          mb: "5px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: "var(--green-accent-400)" }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;