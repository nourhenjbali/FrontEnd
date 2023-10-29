import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function DataTable() {
  const [data, setData] = React.useState([]);
  const download = (filename) => {
    axios
      .get(`http://localhost:8081/api/cours/${filename}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:8081/api/cours/courses")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const rows = data.map((item) => {
    return {
      ...item,
    };
  });
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "matiere", headerName: "Matiére", width: 100 },
    { field: "classeName", headerName: "Class Name", width: 100 },
    {
      field: "imageName",
      headerName: "File",
      // type: "number",
      width: 100,
    },
    {
      field: "download",
      headerName: "Download",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => download(params.row.imageName)}
        >
          DOWNLOAD
        </button>
      ),
    },
  ];
  console.log("rows", rows);
  return (
    <div style={{ height: 500, width: "70%", marginTop: 50 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
