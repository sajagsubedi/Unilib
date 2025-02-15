import React, { ReactNode } from "react";
import { BookOpen } from "lucide-react";
import Image from "next/image";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="min-h-screen bg-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full p-5 bg-gray-50 rounded-lg shadow-md">
          {/* Logo and Header */}
          <div className="text-center mb-8 flex justify-center">
            <div className="flex gap-1 items-center w-max">
              <Image
                src="/logo.svg"
                alt="logo"
                className="h-12 w-12"
                width={48}
                height={48}
              />
              <h2 className="text-primary font-bold text-3xl">Unilib</h2>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};
export default Layout;
