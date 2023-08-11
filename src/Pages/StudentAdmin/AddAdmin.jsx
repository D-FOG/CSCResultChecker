import React, { useState } from "react";
import "./style/addadmin.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
const AddAdmin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form validation passed, submit the form
      console.log("Form submitted");
      try {
        axios
          .post("https://result-backend.onrender.com/admin", {
            firstName: formData.firstName,
            lastName: formData.lastName,
            middleName: formData.middleName,
            password: formData.password,
            email: formData.email,
            passwordConfirm: formData.passwordConfirm,
          })
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              toast.success("Admin successfully created", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              // set fields to empty
              setFormData({
                firstName: "",
                lastName: "",
                middleName: "",
                email: "",
                password: "",
                passwordConfirm: "",
              });
            } else {
              console.log("error occured");
            }
          })
          .catch((error) => {
            console.log(error.response.data.error);
            toast.error(error.response.data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // Form validation failed, update the 'errors' state
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }
    if (!formData.passwordConfirm) {
      errors.passwordConfirm = "Confirm Password is required";
    } else if (formData.password !== formData.passwordConfirm) {
      errors.passwordConfirm = "Passwords do not match";
    }
    return errors;
  };

  const hasErrors = () => {
    return Object.keys(errors).length !== 0;
  };

  return (
    <div className="sAdminMain">
      <div className="sAdminCard">
        <h2 className="sAdmindesc">Add an administrator</h2>
        <hr />
        <form className="sAdminform" onSubmit={handleSubmit}>
          <label>
            <div className="sAdminStyle">Admin Email:</div>
          </label>
          {errors.email && <span className="error">{errors.email}</span>}

          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter admin email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>
            <div className="sAdminStyle">First Name:</div>
          </label>
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter Admin's first name"
            />
          </div>
          <label>
            <div className="sAdminStyle">Last Name:</div>
          </label>
          {errors.lastName && <span className="error">{errors.lastName}</span>}
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <label>
            <div className="sAdminStyle">Middle Name:</div>
          </label>
          {errors.middleName && (
            <span className="error">{errors.middleName}</span>
          )}
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="text"
              placeholder="Enter Admin's middle name"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              required
            />
          </div>
          <label>
            <div className="sAdminStyle">Password:</div>
          </label>
          {errors.password && <span className="error">{errors.password}</span>}
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="password"
              placeholder="Enter admin password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <label>
            <div className="sAdminStyle">Comfirm Password:</div>
          </label>
          {errors.passwordConfirm && (
            <span className="error-message">{errors.passwordConfirm}</span>
          )}
          <div className="sAdminInputTab">
            <input
              className="sAdminInput"
              type="password"
              placeholder="comfirm password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn" type="submit"  disabled={hasErrors()}>
            Add
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddAdmin;
