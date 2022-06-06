import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import "./EmployeeDrawer.css";
import {MdAddAPhoto} from 'react-icons/md'

const EmployeeDrawer = () => {
    const [employeeEmail, setEmploeeEmail] = useState('')
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  const employeesList = ['Prem', 'Vidya', 'Vinay']
  const rolesList = ['HR', 'Store Incharge', 'Purchase Head']
  const [role, setRole] = useState(rolesList[0])
  const [employee, setEmployee] = useState(employeesList[0])
  const onChangeEmployee = (e) => {
    setEmployee(e.target.value);
  };
  const onChangeEmployeeEmail = (e) => {
      setEmploeeEmail(e.target.value)
  }
  const onChangeRole = (e) => {
    setRole(e.target.value)
}
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        arial-label="logo"
        onClick={() => setIsDrawOpen(true)}
      >
        <button className="button">Create New</button>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box style={{padding:'20px', backgroundColor:'#292929', height:'100vh', backgroundSize:'cover'}} p={2} width="250px"  role="presentation">
          <Typography variant="h1" sx={{ fontSize: "20px", color:'#b7b1b1' }}>
            Add Employee
          </Typography>
          <div className='add-employee-container'>
          <div className='capture-container'>
              <MdAddAPhoto className='capture-icon' />
          </div>
          <div className="dropdown-container">
              <p className="dropdown-name">NAME OF EMPLOYEE</p>
              <select
              value={employee}
              onChange={onChangeEmployee}
              style={{
                fontSize: "10px",
                color: "#9e9e9e",
                border: "none",
                backgroundColor:'rgb(49, 49, 51)'
              }}
            >
              {employeesList.map((each) => (
                <option key={each}>{each}</option>
              ))}
            </select>
          </div>
          <input type='text' className='email-input' value={employeeEmail} placeholder='Email' onChange={onChangeEmployeeEmail} />
          <div className="dropdown-container">
              <p className="dropdown-name">ASSIGN ROLE</p>
              <select
              value={role}
              onChange={onChangeRole}
              style={{
                fontSize: "10px",
                color: "#9e9e9e",
                border: "none",
                backgroundColor:'rgb(49, 49, 51)'
              }}
            >
              {rolesList.map((each) => (
                <option key={each}>{each}</option>
              ))}
            </select>
          </div> 
          <div className='button-container'>
              <button type='button' className='cancel-button'>CANCEL</button>
              <button className="create-button">CREATE</button>
          </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};
export default EmployeeDrawer;
