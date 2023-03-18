import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo.svg";
import Google from "../../../../public/google.svg";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const handleGoogleSignin = () => {
    console.log("google signin");
    router.push("/dashboard");
  };

  return (
    <div className="bg-white flex items-center justify-center h-screen ">
      <div className="signup__container">
        <div className="logo__container my-5">
          <Image src={Logo} alt="logo" />
        </div>
        <h1 className="font-bold mb-4 text-primarydark text-2xl">
          Get&apos;s Started
        </h1>
        <p className="text-graydark font-normal text-lg">
          have an account?{" "}
          <a className="text-primarypurple" href="/auth/signin">
            Sign in
          </a>
        </p>

        <div className="google_signin my-12">
          <button
          onClick={handleGoogleSignin} 
          className="items-center google_signin__button rounded-lg space-x-2 flex border-2 p-2">
            <Image src={Google} alt="google logo" className="w-6 h-6" />
            <p className="text-primarydark font-medium text-lg">
              Sign up with Google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
