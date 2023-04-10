import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Table from "./components/Table/Table";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ParentDetails from "./components/parentDetails/ParentDetails";
import ParentProfile from "./components/profile/ParentProfile";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <div className="app-body-sidebar">
          <Sidebar />
        </div>
        <div className="table">
          {/* <Table/> */}
          <Router>
            <Routes>
              <Route exact path="/" element={<Table/>} />
              <Route path="/parentDetails" element={<ParentDetails/>} />
              <Route path="/parentProfile" element={<ParentProfile/>} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
