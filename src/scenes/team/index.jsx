import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      headerAlign: "left",
      renderCell: ({ row: { access } }) => {
        const accessConfig = {
          admin: {
            bg: "var(--green-accent-600)",
            icon: <AdminPanelSettingsOutlinedIcon />,
            label: "Admin",
          },
          manager: {
            bg: "var(--green-accent-700)",
            icon: <SecurityOutlinedIcon />,
            label: "Manager",
          },
          user: {
            bg: "var(--green-accent-700)",
            icon: <LockOpenOutlinedIcon />,
            label: "User",
          },
        };

        const config = accessConfig[access] || accessConfig.user;

        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            backgroundColor={config.bg}
            borderRadius="4px"
          >
            {config.icon}
            <Typography sx={{ ml: "5px", color: "var(--grey-100)" }}>
              {config.label}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        className="data-grid-box"
        sx={{ mt: "40px", height: "75vh" }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Team;