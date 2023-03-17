import Image from "next/image";
import React from "react";
import Logo from "../../../../public/logo.svg";

const index = () => {
  return (
    <div className="bg-white flex items-center justify-center h-screen ">
      <div className="signup__container">
        <div className="logo__container my-5">
        <Image src={Logo} alt="logo" />

        </div>
        <h1 className="font-bold mb-4 text-primarydark text-2xl">
          Get &apos;s Started
        </h1>
        <p className="text-graydark font-normal text-lg">
         Don&apos;t have an account?{" "}
          <a className="text-primarypurple" href="/auth/signup">
            Sign up
          </a>
        </p>

        <div className="google_signin my-12">
          <button className="items-center google_signin__button rounded-lg space-x-2 flex border-2 p-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google logo"
              className="w-6 h-6"
            />
            <p className="text-primarydark font-medium text-lg">
              Sign in with Google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
