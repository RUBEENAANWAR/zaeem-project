import React, { useState } from "react";
import "./ParentDetails.css";
import profile from "../../images/profile.jpg";
import { FaHome } from "react-icons/fa";

const ParentDetails = () => {
  return (
    <div className="main-div">
      <div className="sub-header">
        <div className="parent-head">
          <h4>Parent</h4>
        </div>
        <div className="parent-list">
          <h6>
            <FaHome className="fa-house" />
            Dashboard
          </h6>
          <h6>* Parent Details</h6>
        </div>
      </div>
      <div className="content-box">
        <div classname="parent-table">
          <div className="parent">
            <div classname="parent2">
            <div className="parent-details">
              <div className="parent-pic">
                <img src={profile} alt="Profile" />
              </div>
              <div className="details">
                <div className="parent-name">
                  <h3>Geetha</h3>
                </div>
                <div className="other-details">
                  <h6>Phone:</h6>
                  <h6>Email:</h6>
                  <h6>DOB:</h6>
                </div>
            </div>
            </div>
            <div className="address">
              <div className="permanent-address">
                <h3>
                  <b>Permanent Address</b>
                </h3>
                <h6>bhedhsaidha bhavan asd</h6>
                <h6>asdasd india</h6>
                <h6>56788</h6>
              </div>
              <div className="postal-address">
                <h3>
                  <b>Postal Address</b>
                </h3>
              </div>
            </div>
            </div>
            <div className="authentication">
              <div className="auth-items">
              <h6>
                <b>Authentication Details</b>
              </h6>
              <input type="text" id="inputbox" placeholder="username:" />
              <h6>
                <br/>
                <b>Notifications</b>
              </h6>
              <h6>SMS</h6>
              <br/>
              <h6>
                Bus: <span id="disabledText">Disabled</span>
              </h6>
              <h6>
                News:<span id="disabledText">Disabled</span>
              </h6>
              <h6>
                Notice:<span id="enabledText">Enabled</span>
              </h6>
              </div>
            </div>
          </div>  

          <table className="table">
            <tr>
              <th>Students No</th>
              <th>Admission Class</th>
              <th>Vehicle Id</th>
              <th>Student Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Admission Date</th>
            </tr>
            <tr>
              <td>24</td>
              <td>3rd</td>
              <td>1</td>
              <td>vysh3</td>
              <td>+917012962320</td>
              <td>sinu.jamal@zaeemsolutions.com</td>
              <td>12-02-2022</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="buttons">
        <button className="cancel">Cancel</button>
        <button className="edit">Edit</button>
      </div>
    </div>
  );
};

export default ParentDetails;
