"use client";

import AuthForm from "@/components/AuthForm";
import React from "react";
import { SignupObject } from "@/lib/validations";

const Page = () => {
  return (
    <AuthForm
      defaultValues={{
        fullName: "",
        email: "",
        password: "",
        universityId: 0,
        universityCard: "",
      }}
      type="SIGN_UP"
      schema={SignupObject}
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
