import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { AuthFormContainer, InputComponent } from "../../../components";
import { useFormik } from "formik";
import { filterFormikErrors } from "../../../helpers/formikHelpers";
import { XMarkIcon } from "@heroicons/react/24/outline";

const validationSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email!").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Register = () => {
  const { values, handleChange, handleSubmit, isSubmitting, errors, touched } =
    useFormik({
      initialValues: { username: "", email: "", password: "" },
      validationSchema,
      onSubmit: async (values, action) => {
        action.setSubmitting(true);
        console.log(values);
      },
    });
  // const { name, email, password } = values;
  const formErrors = filterFormikErrors(errors, touched, values);
  return (
    <div className="flex items-center justify-center h-[100vh] ">
      <AuthFormContainer title="Create New Account" onSubmit={handleSubmit}>
        <InputComponent
          handleChange={handleChange}
          name="username"
          type="text"
        />
        <InputComponent handleChange={handleChange} name="email" type="text" />
        <InputComponent
          handleChange={handleChange}
          name="password"
          type="password"
        />

        <button
          type="submit"
          className="w-full bg-[#3a4042] text-white rounded-md p-2 font-bold active:opacity-65"
          disabled={isSubmitting}
        >
          Register
        </button>
        <div className="">
          {formErrors.map((err) => {
            return (
              <div
                key={err}
                className="space-x-1 flex items-center text-red-500"
              >
                <XMarkIcon className="w-4 h-4" />
                <p className="text-xs">{err}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between text-[#720e9e]">
          <Link to="/auth/login" className="hover:text-cyan-500">
            Login
          </Link>
          <Link to="/auth/forget-password" className="hover:text-cyan-500">
            Forget password
          </Link>
        </div>
      </AuthFormContainer>
    </div>
  );
};

export default Register;
