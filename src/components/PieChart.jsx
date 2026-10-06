import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: "var(--grey-100)" } },
          legend: { text: { fill: "var(--grey-100)" } },
          ticks: {
            line: { stroke: "var(--grey-100)", strokeWidth: 1 },
            text: { fill: "var(--grey-100)" },
          },
        },
        legends: { text: { fill: "var(--grey-100)" } },
        tooltip: { container: { color: "var(--primary-500)" } },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="var(--grey-100)"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );
};

export default PieChart;