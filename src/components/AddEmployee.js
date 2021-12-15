import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../features/employeesSlice";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { handleChange, handleSubmit, handleBlur, errors, touched } = useFormik(
    {
      initialValues: { name: "", email: "", address: "", phone: "" },
      onSubmit: (values) => {
        dispatch(addMovie({ id: uuidv4(), ...values }));
        navigate("/");
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().min(2).max(20).required(),
        email: Yup.string().email().required(),
        address: Yup.string().min(2).max(50).required(),
        phone: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required(),
      }),
    }
  );

  return (
    <form style={{ padding: "50px 200px" }} onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input
          type="text"
          id="exampleInputName"
          name="name"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && (
          <div className="error">{errors.name}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail">Email</label>
        <input
          type="email"
          id="exampleInputEmail"
          name="email"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputAddress">Address</label>
        <input
          as="textarea"
          className="form-control"
          id="exampleInputAddress"
          name="address"
          rows="3"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.address && touched.address && (
          <div className="error">{errors.address}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPhone">Phone</label>
        <input
          type="text"
          id="exampleInputPhone"
          name="phone"
          className="form-control"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phone && touched.phone && (
          <div className="error">{errors.phone}</div>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </form>
  );
};

export default AddEmployee;
