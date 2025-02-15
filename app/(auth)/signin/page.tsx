"use client";

import AuthForm from "@/components/AuthForm";
import React from "react";
import { SigninObject } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      defaultValues={{
        email: "",
        password: "",
      }}
      type="SIGN_IN"
      schema={SigninObject}
      onSubmit={(data) => {
        console.log("OnSUbmit");
        return new Promise<any>((resolve, reject) => {
          resolve({ success: true });
        });
      }}
    ></AuthForm>
  );
};

export default Page;
