"use client";

import React from "react";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import api from "@/api";

type LogoutResponse = {
  data: { message: string };
};

type UserTypesResp = {
  data: {
    _id: string;
    username: string;
    email: string;
    error?: string;
  };
};

const Home = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const router = useRouter();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await api<LogoutResponse>({
        method: "POST",
        url: "/user/signout",
      });
      if (response.data.message) {
        setLoading(false);
        router.replace("/");
      }
    } catch (error) {
      setLoading(false);
      alert("Something went wrong");
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const response = await api<UserTypesResp>({
          method: "GET",
          url: "/user",
        });
        setUsername(response.data.username);
      } catch (error) {
        setUsername(null!);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-20 p-5">
      <div className="flex gap-1">
        <Image src="/assets/images/hello.jpg" alt="" height={50} width={50} />
        <h2 className="text-3xl mt-2">Welcome</h2>
      </div>
      <p className="text-center">
        <strong className="text-lg">{username}</strong>, enjoy using the
        application
      </p>
      <Button
        label={loading ? "Loading..." : "Log out"}
        className="bg-[dodgerblue] hover:opacity-80 mt-28 text-white p-2 rounded-lg"
        disabled={loading}
        onClick={handleLogout}
      />
    </div>
  );
};

export default Home;
