"use client";

import React from "react";
import api from "@/api";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PageComponent from "@/components/PageComponent";
import { loginSchema } from "@/validation/validationSchema";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoginTypes {
  username: string;
  password: string;
}

type ResponseData = {
  data: {
    _id: string;
    username: string;
    email: string;
    token: string;
    message: string;
    error?: string;
  };
};

const Login = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (values: LoginTypes) => {
    try {
      setLoading(true);
      const response = await api<ResponseData>({
        method: "POST",
        url: "/user/signin",
        data: values,
      });
      if (response.data.error) {
        formik.setErrors({ password: response.data.error });
        setLoading(false);
      } else {
        alert(response.data.message);
        setLoading(false);
        router.replace("/home");
        values.password = "";
        values.username = "";
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
    }
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
          label={loading ? "Loading..." : "Sign in now"}
          type="submit"
          className="text-white outline-none p-2 rounded-lg bg-orange-600 hover:opacity-60 opacity-70 w-full lg:w-[200px]"
          disabled={loading}
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
