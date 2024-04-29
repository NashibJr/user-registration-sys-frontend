import Button from "@/components/Button";
import Input from "@/components/Input";
import PageComponent from "@/components/PageComponent";
import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <PageComponent
      title="Create a free account"
      paragraph="Dear user, create your account by providing your username, email and password."
    >
      <form className="lg:pl-12 lg:pr-12 flex flex-col gap-4 w-full sm:w-[400px] md:w-full mt-20 md:mt-auto mx-auto">
        <h2 className="font-bold text-white text-2xl md:text-3xl text-center opacity-80">
          Sign up
        </h2>
        <Input label="Username" placeholder="Username" />
        <Input label="Email" placeholder="Email" />
        <Input label="Password" placeholder="Password" />
        <Button
          label="Sign in now"
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
