"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import PageComponent from "@/components/PageComponent";
import { loginSchema } from "@/validation/validationSchema";
import { FormikValues, useFormik } from "formik";
import Link from "next/link";

const Login = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values, ">>>>>");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <PageComponent
      title="Welcomeback"
      paragraph="Dear user provide your correct credentials and signin. If you dont
    have an account feel free to create on by clicking in the signup
    link"
    >
      <form
        className="lg:pl-12 lg:pr-12 flex flex-col gap-4 w-full sm:w-[400px] md:w-full mt-20 md:mt-auto mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="font-bold text-white text-2xl md:text-3xl text-center opacity-80">
          Sign in
        </h2>
        <Input
          label="Username"
          type="text"
          placeholder="Username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={
            formik.errors.username && formik.touched && formik.errors.username
          }
          required
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            formik.errors.password && formik.touched && formik.errors.password
          }
          required
        />
        <Button
          label="Sign in now"
          type="submit"
          className="text-white outline-none p-2 rounded-lg bg-orange-600 hover:opacity-60 opacity-70 w-full lg:w-[200px]"
        />
        <Link href="#" className="text-white">
          Lost your password?
        </Link>
        <p className="text-white -mt-4">
          Don't have an account?{" "}
          <Link href="/signup" className="text-[dodgerblue] hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </PageComponent>
  );
};

export default Login;
