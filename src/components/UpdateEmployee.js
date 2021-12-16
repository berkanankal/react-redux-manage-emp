import { Link, useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee } from "../features/employeesSlice";
import * as Yup from "yup";
import ErrorPage from "../components/ErrorPage";

const UpdateEmployee = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const employees = useSelector((state) => state.employees);
  const currentEmployee = employees.find((e) => e.id === id);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: currentEmployee,
      onSubmit: (values) => {
        dispatch(updateEmployee(values));
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
    });

  if (currentEmployee === undefined) {
    return <ErrorPage />;
  }

  return (
    <form style={{ padding: "50px 200px" }} onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="exampleInputName">Name</label>
        <input
          type="text"
          id="exampleInputName"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className="form-control"
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="form-control"
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
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          rows="3"
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
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control"
        />
        {errors.phone && touched.phone && (
          <div className="error">{errors.phone}</div>
        )}
      </div>
      <button type="submit" className="btn btn-success">
        Update
      </button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </form>
  );
};

export default UpdateEmployee;
