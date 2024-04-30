"use client";

import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageComponent from "@/components/PageComponent";
import { FormikValues, useFormik } from "formik";
import Link from "next/link";
import { signupSchema } from "@/validation/validationSchema";

const SignUp = () => {
  const handleSubmit = (values: FormikValues) => {
    console.log(values, ">>>>>");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validateOnBlur: true,
    validationSchema: signupSchema,
    onSubmit: handleSubmit,
  });
  return (
    <PageComponent
      title="Create a free account"
      paragraph="Dear user, create your account by providing your username, email and password."
    >
      <form
        className="lg:pl-12 lg:pr-12 flex flex-col gap-4 w-full sm:w-[400px] md:w-full mt-20 md:mt-auto mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <h2 className="font-bold text-white text-2xl md:text-3xl text-center opacity-80">
          Sign up
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
          label="Email"
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && formik.touched && formik.errors.email}
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
          label="Sign up now"
          type="submit"
          className="text-white outline-none p-2 rounded-lg bg-orange-600 hover:opacity-60 opacity-70 w-full lg:w-[200px]"
        />
        <p className="text-white">
          Already have an account?{" "}
          <Link href="/" className="text-[dodgerblue] hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </PageComponent>
  );
};

export default SignUp;
