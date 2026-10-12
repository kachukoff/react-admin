import { Box, IconButton, InputBase } from "@mui/material";
import { useTheme } from "../../theme/ThemeContext";
import { useTranslation } from "react-i18next";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const { mode, toggle } = useTheme();
  const { i18n, t } = useTranslation();

  const currentLang = i18n.resolvedLanguage || "ru";
  const nextLang = currentLang === "ru" ? "en" : "ru";

  const toggleLanguage = () => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <Box className="topbar">
      {/* СТРОКА ПОИСКА */}
      <Box className="topbar__search">
        <InputBase
          sx={{ ml: 2, flex: 1, color: "var(--text-primary)" }}
          placeholder={t("Search")}
        />
        <IconButton type="button" sx={{ p: 1, color: "var(--text-primary)" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ИКОНКИ */}
      <Box sx={{ display: "flex" }}>
        <IconButton
          onClick={toggleLanguage}
          title={`Switch to ${nextLang.toUpperCase()}`}
          sx={{
            color: "var(--text-primary)",
            fontWeight: 700,
            fontSize: "13px",
            minWidth: 40,
            border: "1px solid var(--border)",
            borderRadius: "6px",
            px: 1, 
            py: 0.5,
            "&:hover": {
              borderColor: "var(--accent)",
              backgroundColor: "color-mix(in srgb, var(--accent) 10%, transparent)",
            },
          }}
        >
          {currentLang.toUpperCase()}
        </IconButton>
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
    </Box >
  );
};

export default Topbar;