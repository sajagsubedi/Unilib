import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="pt-32 px-[8vw]">{children}</main>
    </>
  );
};
export default Layout;
