import { useState } from "react";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import "./style/student.css";

// React icon
import { FiUpload } from "react-icons/fi";

// images
import AddStudentImage from "./images/AddStudent.png";
import UpdateStudentImage from "./images/UpdateStudent.png";

const Students = () => {
  const [pageToDisplay, setPageToDisplay] = useState("");
  const [page, setPage] = useState(0);

  const handleAdd = () => {
    setPageToDisplay("add new student");
    setPage(page + 1);
  };

  const handleUpdate = () => {
    setPageToDisplay("update a student");
    setPage(page + 1);
  };

  const HandleStudentOption = () => {
    return (
      <>
        <div className="studentHeader">
          <div className="header_text">
            <h2>Students</h2>
          </div>
          <div className="export" onClick={() => handleToggle("resultPage")}>
            <FiUpload className="export_icon" />
            <p>Export</p>
          </div>
        </div>

        <div
          className="cards"
          style={{ display: "flex" }}
        >
          <div className="carddivs course_carddivs" onClick={handleAdd}>
            <div className="course_cards add_course">
              <img src={AddStudentImage} alt="Add student" />
              <h2>Add new student</h2>
            </div>
          </div>
          <div className="course_cards update_course" onClick={handleUpdate}>
            <img src={UpdateStudentImage} alt="Update student" />
            <h2>Update student</h2>
          </div>
        </div>
      </>
    );
  };

  const componentList = [
    <HandleStudentOption />,
    pageToDisplay == "add new student" ? (
      <AddStudent page={page} setPage={setPage} />
    ) : (
      <UpdateStudent page={page} setPage={setPage} />
    ),
  ];
  //   style={{display: value || value2 ?'none' : 'flex' }}
  return <div className="studentContainer">{componentList[page]}</div>;
};

export default Students;
