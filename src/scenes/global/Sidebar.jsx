import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const menuData = [
  {
    section: "sections.data",
    items: [
      { title: "navigation.dashboard", path: "/", icon: HomeOutlinedIcon },
      { title: "navigation.manage_team", path: "/team", icon: PeopleOutlinedIcon },
      { title: "navigation.contacts_information", path: "/contacts", icon: ContactsOutlinedIcon },
      { title: "navigation.invoices_balances", path: "/invoices", icon: ReceiptOutlinedIcon },
    ],
  },
  {
    section: "sections.pages",
    items: [
      { title: "navigation.profile_form", path: "/form", icon: PersonOutlinedIcon },
      { title: "navigation.calendar", path: "/calendar", icon: CalendarTodayOutlinedIcon },
      { title: "navigation.faq_page", path: "/faq", icon: HelpOutlineOutlinedIcon },
    ],
  },
  {
    section: "sections.charts",
    items: [
      { title: "charts.bar", path: "/bar", icon: BarChartOutlinedIcon },
      { title: "charts.pie", path: "/pie", icon: PieChartOutlineOutlinedIcon },
      { title: "charts.line", path: "/line", icon: TimelineOutlinedIcon },
      { title: "charts.geography", path: "/geography", icon: MapOutlinedIcon },
    ],
  },
];

const Sidebar = ({
  user = { name: "Ed Roh", role: "user.vp_role", avatar: "../../assets/user.png" },
}) => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const drawerWidth = isCollapsed ? 80 : 280;

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        transition: "width 0.2s ease-in-out",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "var(--primary-400)",
          borderRight: "none",
          overflowX: "hidden",
          transition: "width 0.2s ease-in-out",
        },
      }}
    >
      {/* Кнопка сворачивания */}
      <Box
        sx={{
          display: "flex",
          justifyContent: isCollapsed ? "center" : "flex-end",
          p: 1,
        }}
      >
        <IconButton
          onClick={() => setIsCollapsed(!isCollapsed)}
          sx={{ color: "var(--grey-100)" }}
        >
          <MenuOutlinedIcon />
        </IconButton>
      </Box>

      {/* Профиль */}
      {!isCollapsed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Box
            component="img"
            alt="profile-user"
            src={user.avatar}
            sx={{
              width: 100,
              height: 100,
              cursor: "pointer",
              borderRadius: "50%",
            }}
          />
          <Box sx={{ mt: "10px", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{ color: "var(--grey-100)", fontWeight: "bold" }}
            >
              {user.name}
            </Typography>
            <Typography variant="h5" sx={{ color: "var(--green-accent-500)" }}>
              {t(user.role)}
            </Typography>
          </Box>
        </Box>
      )}

      {/* Пункты меню */}
      <List component="nav">
        {menuData.map((section) => (
          <Box key={section.section}>
            {!isCollapsed && (
              <Typography
                variant="h6"
                sx={{ m: "15px 0 5px 20px", color: "var(--grey-300)" }}
              >
                {t(section.section)}
              </Typography>
            )}
            {section.items.map((item) => {
              const ItemIcon = item.icon;

              return (
                <ListItem
                  key={item.title}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <ListItemButton
                    component={NavLink}
                    to={item.path}
                    sx={{
                      minHeight: 48,
                      justifyContent: isCollapsed ? "center" : "flex-start",
                      px: isCollapsed ? 0 : 2.5,
                      color: "var(--grey-100)",
                      transition: "all 0.2s ease",
                      "&.active": {
                        color: "var(--blue-accent-500)",
                        backgroundColor: "var(--primary-500) !important",
                      },
                      "&:hover": {
                        backgroundColor: "var(--blue-accent-600) !important",
                        color: "#ffffff",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: isCollapsed ? 48 : 0,
                        mr: isCollapsed ? 0 : 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "inherit",
                      }}
                    >
                      <ItemIcon />
                    </ListItemIcon>

                    {!isCollapsed && (
                      <ListItemText
                        primary={t(item.title)}
                        sx={{ opacity: isCollapsed ? 0 : 1 }}
                      />
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </Box>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;