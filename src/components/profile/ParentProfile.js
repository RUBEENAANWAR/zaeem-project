import React from "react";
import "./ParentProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faIdCard,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

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
              <FontAwesomeIcon
                icon={faUser}
                className="fa-thin fa-icon-big"
                style={{ color: "#b602f7" }}
              />
              Profile
            </li>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="fa-light" />
              Notification Consent
            </li>
            <li>
              <FontAwesomeIcon icon={faIdCard} className="fa-light" />
              Children Details
            </li>
            <li>
              <FontAwesomeIcon icon={faIdCard} className="fa-light" />
              Authentication Details
            </li>
            <li>
              <FontAwesomeIcon icon={faIdCard} className="fa-light" />
              Review Details
            </li>
            <li>
              <FontAwesomeIcon icon={faThumbsUp} className="fa-light" />
              Completed
            </li>
          </ul>
        </div>
        <div className="parent-profile">
          <i class="fa-duotone fa-circle"></i>
          <h6>Profile Photo</h6>
        </div>
        <div className="parent-details">
          {/* <form action="/action_page.php"> */}
          <label for="Email">Email</label>
          <input type="email" id="email" placeholder="email" />
          <br />
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
            id="name"
            placeholder="dd-mm-yyyy"
            name="date of birth"
          />
          <br />
          <input type="submit" value="Submit" />
          {/* </form> */}
        </div>
        <div className="permanent-address">
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
          <input type="text" placeholder="District,state" name="name" />
          <br />
          <select>
            <option value="countryname" selected="selected">
              Select Country
            </option>
          </select>
          <br />
          <input type="checkbox" />
          <label for="date of birth">
            Postel Address Is Same As Permanent Address
          </label>
        </div>
        <div className="postel-address">
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
          <input type="text" placeholder="District,state" name="name" />
          <br />
          <select>
            <option value="countryname" selected="selected">
              Select Country
            </option>
          </select>
          <br />
          <input type="checkbox" />
          <label for="date of birth">
            Postel Address Is Same As Permanent Address
          </label>
        </div>
      </div>
    </div>
  );
};

export default parentProfile;
