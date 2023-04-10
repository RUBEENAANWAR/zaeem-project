import React from "react";
import "./ParentProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faIdCard,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import profile from "../../images/profile.jpg";

const parentProfile = () => {
  return (
    <div className="parent-header">
      <div className="sub-header">
        <h4>Parent</h4>
        <h6>parent</h6>
        <h6>Profile</h6>
      </div>

      <div className="parent-div">
        <div className="parent-top">
          <ul>
            <li>
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faUser}
                  className="fa-thin fa-2xl"
                  style={{ color: "#b602f7" }}
                />
                <div className="text">Profile</div>
              </div>
            </li>

            <li>
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="fa-light fa-2xl"
                />
                <div className="text">Notification Consent</div>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <FontAwesomeIcon icon={faIdCard} className="fa-light fa-2xl" />
                <div className="text">Children Details</div>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <FontAwesomeIcon icon={faIdCard} className="fa-light fa-2xl" />
                <div className="text">Authentication Details</div>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <FontAwesomeIcon icon={faIdCard} className="fa-light fa-2xl" />
                <div className="text">Review Details</div>
              </div>
            </li>
            <li>
              <div className="icon-container">
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  className="fa-light fa-2xl"
                />
                <div className="text">Completed</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="column ">
              <div className="parent-profile column-1">
                <h5>1.Parent Profile</h5>
                <img src={profile} />
                <h8>Profile Photo</h8>
                <label for="Email">Email</label>
                <input type="email" id="email" placeholder="email" />
                <br />
              </div>
              <div className="parent-details">
                <label for="Name">Name</label>
                <input type="text" id="name" placeholder="Name" name="name" />
                <br />
                <label for="number">Contact No</label>
                <input
                  type="number"
                  id="number"
                  placeholder="Contact No"
                  name="number"
                />
                <br />
                <label for="date of birth">Date Of Birth</label>
                <input
                  type="date"
                  id="date"
                  placeholder="dd-mm-yyyy"
                  name="date of birth"
                />
                <br />
              </div>
            </div>
            <div className="column2">
              <div className="permanent-address">
                <h5>Permanent Address</h5>
                <input type="text" placeholder="House No/ApartmentNo" />
                <br />

                <input
                  type="text"
                  placeholder="Street Name/ApartMentName"
                  name="name"
                />
                <br />
                <input type="text" placeholder="Pin Code" name="name" />
                <br />
                <input type="checkbox" />
                <label for="date of birth">
                  Postel Address Is Same As Permanent Address
                </label>
              </div>
              <div className="permanent-address-2">
                <input type="text" placeholder="District,state" name="name" />
                <br />
                <select>
                  <option value="countryname" selected="selected">
                    Select Country
                  </option>
                </select>
                <br />
              </div>
            </div>
            <div className="column3">
             
              <div className="postel-address">
              <h5>Postal Address</h5>
                <input type="text" placeholder="House No/ApartmentNo" />
                <br />

                <input
                  type="text"
                  placeholder="Street Name/ApartMentName"
                  name="name"
                />
                <br />
                <input type="text" placeholder="Pin Code" name="name" />
                <br />
              </div>
              <div className="postel-address-2">
                <input type="text" placeholder="District,state" name="name" />
                <br />
                <select>
                  <option value="countryname" selected="selected">
                    Select Country
                  </option>
                </select>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="button-submit">
          <button type="submit">Save & Next</button>
        </div>
      </div>
    </div>
  );
};

export default parentProfile;
