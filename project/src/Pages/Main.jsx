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
    keywords: "Test Test",
  },
  {
    id: 2,
    lastName: "Snow1",
    domain: "Jon1",
    tld: 31,
    status: "Active1",
    keywords: "Test1 Test1",
  },
  {
    id: 3,
    lastName: "Snow2",
    domain: "Jon2",
    tld: 32,
    status: "Active2",
    keywords: "Test2 Test2",
  },
  {
    id: 4,
    lastName: "Snow3",
    domain: "Jon4",
    tld: 35,
    status: "Active5",
    keywords: "Test2 Test3",
  },
  {
    id: 5,
    lastName: "Sno1w",
    domain: "Jon3",
    tld: 3545,
    status: "Active3",
    keywords: "Test3 Test1",
  },
  {
    id: 16,
    lastName: "Snow 56",
    domain: "Jon57",
    tld: 36,
    status: "Active75",
    keywords: "Test57 Test57",
  },
  {
    id: 57,
    lastName: "Snow57",
    domain: "Jon",
    tld: 57,
    status: "Active57",
    keywords: "Test57 Test57",
  },

  {
    id: 8,
    lastName: "Snow8",
    domain: "Jon8",
    tld: 38,
    status: "Active8",
    keywords: "Test8 Test8",
  },
  {
    id: 546,
    lastName: "Snow536",
    domain: "Jon45",
    tld: 435,
    status: "Active435",
    keywords: "Tes435t Test435",
  },
  {
    id: 67,
    lastName: "Snow453",
    domain: "Jon54",
    tld: 455,
    status: "Active43",
    keywords: "Test345 Test345",
  },
  {
    id: 88,
    lastName: "Snow76",
    domain: "Jon67",
    tld: 765,
    status: "Active67",
    keywords: "Test67 Test67",
  },
  {
    id: 988,
    lastName: "Snow34",
    domain: "Jon65",
    tld: 345,
    status: "Active45",
    keywords: "Test54t Test54",
  },
  {
    id: 45,
    lastName: "Snow45",
    domain: "Jon45",
    tld: 3455,
    status: "Active45",
    keywords: "Test54 Test45",
  },
];

const rows2 = [
  {
    id: 1,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 2,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 3,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 4,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 5,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 6,
    tld: 35,
    renewal: "Test Test",
  },
  {
    id: 7,
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
  {
    id: 2,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 3,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 4,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 5,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 6,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 7,
    name: "Test",
    email: "test@test.com",
  },
  {
    id: 8,
    name: "Test",
    email: "test@test.com",
  },
];

const rows4 = [
  {
    id: 1,
    name: "Test",
  },
  {
    id: 2,
    name: "Test",
  },
  {
    id: 3,
    name: "Test",
  },
  {
    id: 4,
    name: "Test",
  },
  {
    id: 5,
    name: "Test",
  },
  {
    id: 6,
    name: "Test",
  },
];

const rows5 = [
  {
    id: 1,
    address: "Test,test7",
  },
  {
    id: 2,
    address: "Test,test7",
  },
  {
    id: 3,
    address: "Test,test7",
  },
  {
    id: 4,
    address: "Test,test7",
  },

  {
    id: 5,
    address: "Test,test7",
  },
  {
    id: 6,
    address: "Test,test7",
  },
];

const rows6 = [
  {
    id: 1,
    keyword: "Test",
  },
  {
    id: 2,
    keyword: "Test",
  },
  {
    id: 3,
    keyword: "Test",
  },
  {
    id: 4,
    keyword: "Test",
  },
  {
    id: 5,
    keyword: "Test",
  },
  {
    id: 6,
    keyword: "Test",
  },
  {
    id: 7,
    keyword: "Test",
  },
  {
    id: 8,
    keyword: "Test",
  },
];

const columns1 = [
  { field: "id", headerName: "ID", width: 220 },
  { field: "domain", headerName: "Domain", width: 220, editable: true },
  { field: "tld", headerName: "TLD", width: 220, editable: true },
  { field: "status", headerName: "Status", width: 220, editable: true },
  {
    field: "adlut",
    headerName: "Adlut",
    width: 220,
    type: "boolean",
    editable: true,
  },
  { field: "keywords", headerName: "Keywords", width: 330, editable: true },
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
  {
    field: "adult",
    headerName: "Adult",
    width: 120,
    editable: true,
    type: "boolean",
  },
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
            // checkboxSelection
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
              // checkboxSelection
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
              // checkboxSelection
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
              // checkboxSelection
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
              // checkboxSelection
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
              // checkboxSelection
            />
          </div>
        </div>
      </div>
    </div>
  );
}
