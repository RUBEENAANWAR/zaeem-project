import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Table from "./components/Table/Table";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ParentDetails from "./components/parentDetails/ParentDetails";
import parentProfile from "./components/profile/ParentProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="App-body-sidebar">
          <Sidebar />
        </div>
        <div className="Table">
          <Router>
            <Routes>
              <Route exact path="/" component={Table} />
              <Route path="/parentDetails" component={ParentDetails} />
              <Route path="parentProfile" Component={parentProfile} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
