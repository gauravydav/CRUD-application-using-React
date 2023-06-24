import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { addUser } from "./UserReducer";

const Create = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().min(4).max(15).required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required")
      .min(15, "Email must be at least 5 characters")
      .max(50, "Email cannot exceed 50 characters"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Invalid phone number")
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        addUser({
          id: users[users.length - 1].id + 1,
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber
        })
      );
      navigate("/");
    }
  });

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-danger">{formik.errors.name}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-danger">{formik.errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              className="form-control"
              placeholder="Enter phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <span className="text-danger">{formik.errors.phoneNumber}</span>
            )}
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

