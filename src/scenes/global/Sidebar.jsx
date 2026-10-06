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
    section: "Data",
    items: [
      { title: "Dashboard", path: "/", icon: HomeOutlinedIcon },
      { title: "Manage Team", path: "/team", icon: PeopleOutlinedIcon },
      { title: "Contacts Information", path: "/contacts", icon: ContactsOutlinedIcon },
      { title: "Invoices Balances", path: "/invoices", icon: ReceiptOutlinedIcon },
    ],
  },
  {
    section: "Pages",
    items: [
      { title: "Profile Form", path: "/form", icon: PersonOutlinedIcon },
      { title: "Calendar", path: "/calendar", icon: CalendarTodayOutlinedIcon },
      { title: "FAQ Page", path: "/faq", icon: HelpOutlineOutlinedIcon },
    ],
  },
  {
    section: "Charts",
    items: [
      { title: "Bar Chart", path: "/bar", icon: BarChartOutlinedIcon },
      { title: "Pie Chart", path: "/pie", icon: PieChartOutlineOutlinedIcon },
      { title: "Line Chart", path: "/line", icon: TimelineOutlinedIcon },
      { title: "Geography Chart", path: "/geography", icon: MapOutlinedIcon },
    ],
  },
];

const Sidebar = ({
  user = { name: "Ed Roh", role: "VP Fancy Admin", avatar: "../../assets/user.png" },
}) => {
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
              {user.role}
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
                {section.section}
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
                        primary={item.title}
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