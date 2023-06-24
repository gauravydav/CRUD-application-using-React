import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./UserReducer";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .min(5, "Email must be at least 5 characters")
    .max(50, "Email cannot exceed 50 characters"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number cannot exceed 15 characters"),
});

const Update = () => {
  const params = useParams();
  const id = params.id;
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id === parseInt(id));

  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");
  const [uphone, setPhone] = useState(existingUser ? existingUser.phoneNumber : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: uname,
      email: uemail,
      phoneNumber: uphone,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        updateUser({
          id: id,
          name: values.name,
          email: values.email,
          phoneNumber: values.phoneNumber,
        })
      );
      navigate("/");
    },
  });

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <span className="text-danger">{formik.errors.phoneNumber}</span>
            )}
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
