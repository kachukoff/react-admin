import { Box, IconButton, InputBase } from "@mui/material";
import { useTheme } from "../../theme/ThemeContext";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const { mode, toggle } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        gap: 2,
      }}
    >
      {/* СТРОКА ПОИСКА */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--primary-400)",
          borderRadius: "3px",
          minWidth: 240,
        }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: "var(--text-primary)" }}
          placeholder="Search"
        />
        <IconButton type="button" sx={{ p: 1, color: "var(--text-primary)" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ИКОНКИ */}
      <Box sx={{ display: "flex" }}>
        <IconButton onClick={toggle} sx={{ color: "var(--text-primary)" }}>
          {mode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton sx={{ color: "var(--text-primary)" }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: "var(--text-primary)" }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton sx={{ color: "var(--text-primary)" }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;