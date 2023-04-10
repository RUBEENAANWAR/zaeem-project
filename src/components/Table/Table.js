import React, { useState } from "react";
import "./Table.css";
import Swal from 'sweetalert2';
import ParentDetails from '../parentDetails/ParentDetails'
import {Link} from 'react-router-dom'


const Table = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  const [inputValue, setInputValue] = useState([]);
  const [data, setData] = useState([
    {
      name: "Sathyan PT",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Prajesh KT",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Zinumol Jamal",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Mike Brown",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "John Doe",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Jane Smith",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "John Doe",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
    {
      name: "Jane Smith",
      number: 564654564,
      email: "demoparent@zaeemsolutions.com",
      created: "14/01/2023",
      action: "",
    },
  ]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleEdit = () => {
    console.log("edited value", inputValue);
  };
  const handleDelete = (row) => {
    Swal.fire({
      title: 'Delete Parent?',
  html: `<strong>Are you sure you want to delete ${row.name} ?</strong><br>
  <strong><u>Parent Details</u></strong><br>
  <strong><h6>Name:</strong> ${row.name}<br><br>
  <strong>Contact Details:</strong> ${row.number}<br><br>
  <strong>Email:</strong> ${row.email}</h6>`,
      showCancelButton: true,
      cancelButtonColor: '#323436',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Delete',
      }).then((result)=>{
        if(result.value){
    setData((prevData) => prevData.filter((rowData) => rowData !== row));
        }
      })
  };
  const [filterQuery, setFilterQuery] = useState("");
  const handleFilter = () => {
    const filteredData = data.filter((row) =>
      row.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setData(filteredData);
  };

  //const [editRow, setEditRow] = useState(null);

  return (
    <div>
      <div className="-2">
        <div className="parent">
          <b>Parent</b>
        </div>
        <div className="parent-list">
          <li>Dashboard</li>
          <li>Parent</li>
          <li>List</li>
        </div>
      </div>
      <div className="container">
        <div className="filter-add">
        <div className="filter">
          <input
            type="text"
            value={filterQuery}
            placeholder="Filtered by keyword"
            onChange={(e) => setFilterQuery(e.target.value)}
            onClick={handleFilter}
          />
        </div>
        <Link to="/parentProfile"><button>Add+</button></Link>
        
        </div>

        <table>
          <thead>
            <tr>
              <th>Parent Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Created on</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {data?.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.number}</td>
                <td>{row.email}</td>
                <td>{row.created}</td>
                <td className="icons">
                  {row.action}
                  <Link to="/parentDetails">
                  <button>
                    <i class="fa-regular fa-file-lines"></i>
                  </button></Link>
                  <button class="button-style" onClick={handleEdit}>
                    <i class="fa-regular fa-pen-to-square"></i>
                  </button>
                  <button class="button-style" onClick={() => handleDelete(row)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

<i class="fa-sharp fa-light fa-qrcode"></i>;
export default Table;
