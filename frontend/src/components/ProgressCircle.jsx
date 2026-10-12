import { Box } from "@mui/material";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(var(--primary-400) 55%, transparent 56%),
          conic-gradient(var(--blue-accent-500) 0deg ${angle}deg, transparent ${angle}deg 360deg)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;