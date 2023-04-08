import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Table from "./components/Table/Table";
import Header from "./components/header/Header"
import Footer from './components/Footer/Footer'
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-body">
        <div className="App-body-sidebar">
          <Sidebar/>
          </div>
          <div className="Table">
            <Table/>
          </div>
       
        </div>
      
      <Footer/>
    </div>
  );
}

export default App;
