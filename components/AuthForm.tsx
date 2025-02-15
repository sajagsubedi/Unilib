"use client";

import React from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";

import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import FileUpload from "./FileUpload";
import Link from "next/link";

interface Props<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
  schema: ZodType<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  defaultValues,
  onSubmit,
  schema,
}: Props<T>) => {
  const isSignin = type == "SIGN_IN";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };
  return (
    <div>
      <h2 className=" text-2xl mb-4 font-bold title-font text-center text-gray-700">
        {isSignin ? (
          <>
            Hey&#44;
            <br />
            <span className="text-primary">Welcome</span> back.
          </>
        ) : (
          <>
            Get
            <span className="text-primary"> Started</span> with Us.
          </>
        )}
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-3"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    {field.name == "universityCard" ? (
                      <FileUpload />
                    ) : (
                      <Input
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" className="bg-primary">
            {isSignin ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Form>
      <div className="mt-5 flex items-center gap-2 justify-center text-gray-500">
        <hr className="w-[175px] h-[2px] bg-gray-200" />
        or
        <hr className="w-[175px]  h-[2px] bg-gray-200" />
      </div>
      <p className="flex gap-2 text-base justify-end mt-4">
        {isSignin ? "Don't have a account?" : "Already have a account"}
        <Link
          className="text-primary underline"
          href={isSignin ? "/signup" : "/signin"}
        >
          {isSignin ? "Signup" : "Signin"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
