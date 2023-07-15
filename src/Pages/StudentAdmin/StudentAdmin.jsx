import { useState } from "react";
import AddAdmin from "./AddAdmin";
import RemoveAdmin from "./RemoveAdmin";
import "./style/studentAdmin.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import AddAdminImage from "./images/AddAdmin.png";
import DeleteAdminImage from "./images/DeleteAdmin.png";
import ViewAdminsImage from "./images/ViewAdmins.png";

const StudentAdmin = () => {
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  const selectedOption1 = (e) => {
    setSelected1(e.target.value);
  };

  const selectedOption2 = (e) => {
    setSelected2(e.target.value);
  };

  const handleClick = () => {
    setValue(!value);
  };
  const handleClick2 = () => {
    setValue2(!value2);
  };

  return (
    <div className="admin_container">
      <div className="AdminHeader">
        <div className="header_text">
          <h2>Administrator</h2>
        </div>
        <div className="export" onClick={() => handleToggle("resultPage")}>
          <FiUpload className="export_icon" />
          <p>Export</p>
        </div>
      </div>

      <div className="cards" style={{ display: value || value2 ? "none" : "flex" }}>
        <div className="carddivs course_carddivs" onClick={handleClick} >
          <div className="course_cards add_admin">
            <img src={AddAdminImage} alt="Add Course" />
            <h2>Add an admin</h2>
          </div>
          <div className="course_cards delete_admin" onClick={handleClick2}>
            <img src={DeleteAdminImage} alt="UpdateCourse" />
            <h2>Remove an admin</h2>
          </div>
          <div className="course_cards view_admin" onClick={""}>
            <img src={ViewAdminsImage} alt="UpdateCourse" />
            <h2>View all admin</h2>
          </div>
        </div>
      </div>
      {value ? <AddAdmin /> : null}
      {value2 ? <RemoveAdmin /> : null}
    </div>
  );
};

export default StudentAdmin;
