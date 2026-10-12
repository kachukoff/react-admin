import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar, ruRU, enUS } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";

const Invoices = () => {
  const { t, i18n } = useTranslation();
  
  const localeText = i18n.language === "ru"
    ? ruRU.components.MuiDataGrid.defaultProps.localeText
    : enUS.components.MuiDataGrid.defaultProps.localeText;
  
  const columns = [
  { field: "id", headerName: t("fields.id") },
  { field: "name", headerName: t("fields.name"), flex: 1, cellClassName: "name-column--cell" },
  { field: "phone", headerName: t("fields.phone"), flex: 1 },
  { field: "email", headerName: t("fields.email"), flex: 1 },
  { field: "cost", headerName: t("fields.cost"), flex: 1,
    renderCell: (params) => (
      <Typography sx={{ color: "var(--green-accent-500)" }}>
        ${params.row.cost}
      </Typography>
    ),
  },
  { field: "date", headerName: t("fields.date"), flex: 1 },
];

  return (
    <Box m="20px">
      <Header title="invoices.title" subtitle="invoices.subtitle" />
      <Box className="data-grid-box" sx={{ mt: "40px", height: "75vh" }}>
        <DataGrid
          key={i18n.language} 
          checkboxSelection 
          rows={mockDataInvoices} 
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          localeText={localeText}
        />
      </Box>
    </Box>
  );
};

export default Invoices;