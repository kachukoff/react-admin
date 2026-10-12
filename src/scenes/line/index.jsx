import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="charts.line" subtitle="charts.line_simple" />
      <Box className="chart-box chart-box--h-full">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;