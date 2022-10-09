import React from "react";
import "../Css/Main.css";
import { DataGrid } from "@mui/x-data-grid";

const rows1 = [
  {
    id: 1,
    lastName: "Snow",
    domain: "Jon",
    tld: 35,
    status: "Active",
    adlut: "Test",
    keywords: "Test Test",
  },
];

const rows2 = [
  {
    id: 1,
    tld: 35,
    renewal: "Test Test",
  },
];

const rows3 = [
  {
    id: 1,
    name: "Test",
    email: "test@test.com",
  },
];

const rows4 = [
  {
    id: 1,
    name: "Test",
  },
];

const rows5 = [
  {
    id: 1,
    address: "Test,test7",
  },
];

const rows6 = [
  {
    id: 1,
    keyword: "Test",
    adult: "Child",
  },
];

const columns1 = [
  { field: "id", headerName: "ID", width: 220 },
  { field: "domain", headerName: "Domain", width: 220, editable: true },
  { field: "tld", headerName: "TLD", width: 220, editable: true },
  { field: "status", headerName: "Status", width: 220, editable: true },
  { field: "adlut", headerName: "Adlut", width: 220, editable: true },
  { field: "keywords", headerName: "Keywords", width: 330,editable: true },
];

const columns2 = [
  { field: "id", headerName: "ID", width: 120, editable: true },
  { field: "tld", headerName: "TLD", width: 120, editable: true },
  { field: "renewal", headerName: "Renewal", width: 180, editable: true },
];

const columns3 = [
  { field: "id", headerName: "ID", width: 120, editable: true },
  { field: "name", headerName: "Name", width: 120, editable: true },
  { field: "email", headerName: "Email", width: 180, editable: true },
];

const columns4 = [
  { field: "id", headerName: "ID", width: 120, editable: true },
  { field: "name", headerName: "Name", width: 300, editable: true },
];

const columns5 = [
  { field: "id", headerName: "ID", width: 120, editable: true },
  { field: "address", headerName: "Address", width: 550, editable: true },
];

const columns6 = [
  { field: "id", headerName: "ID", width: 120, editable: true },
  { field: "keyword", headerName: "Keyword", width: 420, editable: true },
  { field: "adult", headerName: "Adult", width: 120, editable: true },
];
export default function Main() {
  return (
    <div className="maincon">
      <h4>Domain with TLD and keywords</h4>
      <div className="subcon1">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows1}
            columns={columns1}
            pageSize={5}
            checkboxSelection
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
      <div className="mainsub1">
        <div className="subcon2">
          <h4>Fees List</h4>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows2}
              columns={columns2}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
        <div className="subcon3">
          {" "}
          <h4>Registrar List</h4>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows3}
              columns={columns3}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
        <div className="subcon4">
          <h4>Owner List</h4>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows4}
              columns={columns4}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      <div className="mainsub1">
        <div className="subcon5">
          {" "}
          <h4>DNS List</h4>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows5}
              columns={columns5}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
        <div className="subcon6">
          <h4>Keyword List</h4>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows6}
              columns={columns6}
              pageSize={5}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}
