import React, { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="pb-20 mt-20">{children}</div>
    </>
  );
};
export default Layout;
