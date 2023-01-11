import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import "./Sidebar.css";
import axios from "axios";

const Sidebar = () => {
  let dataArray = [];
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://chat-app-a2f38-default-rtdb.firebaseio.com/user-details.json"
      )
      .then((data) => {
        for (let key in data.data) {
          dataArray.push({ data: data.data[key], key : key });
          setUserDetails(dataArray);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(userDetails);
  return (
    <div className="sidebar">
      <div className="user-details">User-Details</div>
      <div className="list-of-users">
      {userDetails.map((data,index) => 
           (
             
        <div className="user-list-details" key={index} >
          <div className="avatar" >
            <Avatar
              sx={{
                bgcolor: "rgb(102,95,170)",
                width: 40,
                height: 40,
                margin: "5px",
              }}
            />
          </div>
          <h6> {data.data.name}  </h6>
        </div>
          )
      )}
    </div>
      </div>
  );
};

export default Sidebar;
