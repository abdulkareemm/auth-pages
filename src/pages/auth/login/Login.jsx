import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { AuthFormContainer, InputComponent } from "../../../components";
import { Link } from "react-router-dom";
import { filterFormikErrors } from "../../../helpers/formikHelpers";
import { XMarkIcon } from "@heroicons/react/24/outline";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email!").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Login = () => {
  const { values, handleChange, handleSubmit, isSubmitting, errors, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        action.setSubmitting(true);
      },
    });
  // const {  email, password } = values;
  const formErrors = filterFormikErrors(errors, touched, values);
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <AuthFormContainer title="Welcome back" onSubmit={handleSubmit}>
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
          Login
        </button>
        <div className="flex items-center justify-between text-[#720e9e] ">
          <Link to="/auth/register" className="hover:text-cyan-500">
            Sign up
          </Link>
          <Link to="/auth/forget-password" className="hover:text-cyan-500">
            Forget password
          </Link>
        </div>
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
      </AuthFormContainer>
    </div>
  );
};

export default Login;
