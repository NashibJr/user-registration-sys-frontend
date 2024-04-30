import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20 p-5">
      <div className="flex gap-1">
        <Image src="/assets/images/hello.jpg" alt="" height={50} width={50} />
        <h2 className="text-3xl mt-2">Welcome</h2>
      </div>
      <p className="text-center">
        <strong className="text-lg">Marcus Rashford</strong>, enjoy using the
        application
      </p>
      <Button
        label="Log out"
        className="bg-[dodgerblue] hover:opacity-80 mt-28 text-white p-2 rounded-lg"
      />
    </div>
  );
};

export default Home;
