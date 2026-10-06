import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geography = () => {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box className="chart-box chart-box--h-full chart-box--bordered">
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;