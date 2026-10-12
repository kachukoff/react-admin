import { Box } from "@mui/material";
import { DataGrid, GridToolbar, ruRU, enUS } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";

const Contacts = () => {
  const { t, i18n } = useTranslation();

  const localeText = i18n.language === "ru"
    ? ruRU.components.MuiDataGrid.defaultProps.localeText
    : enUS.components.MuiDataGrid.defaultProps.localeText;
  
  const columns = [
    { field: "id", headerName: t("fields.id"), flex: 0.5 },
    { field: "registrarId", headerName: t("fields.registrar_id"), flex: 0.7, minWidth: 130 },
    { field: "name", headerName: t("fields.name"), flex: 1, cellClassName: "name-column--cell" },
    { field: "age", headerName: t("fields.age"), type: "number", headerAlign: "left", align: "left" },
    { field: "phone", headerName: t("fields.phone"), flex: 1 },
    { field: "email", headerName: t("fields.email"), flex: 1 },
    { field: "address", headerName: t("fields.address"), flex: 1.5 },
    { field: "city", headerName: t("fields.city"), flex: 1 },
    { field: "zipCode", headerName: t("fields.zip_code"), flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="contacts.title" subtitle="contacts.subtitle" />
      <Box className="data-grid-box" sx={{ mt: "40px", height: "75vh" }}>
        <DataGrid
          key={i18n.language}
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          localeText={localeText}
        />
      </Box>
    </Box>
  );
};

export default Contacts;