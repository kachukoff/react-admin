import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="charts.bar" subtitle="charts.bar_simple" />
      <Box className="chart-box chart-box--h-full">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;