import React from "react";
import { Footer } from "./Footer";

interface HomeLayoutProps {
  header: React.ReactNode;
  rightBar: React.ReactNode;
  leftBar: React.ReactNode;
  main: React.ReactNode;
}

export function HomeLayout({
  header,
  rightBar,
  leftBar,
  main,
}: HomeLayoutProps) {
  return (
    <div className="flex-col h-screen ">
      <div className="flex h-screen ">
        <div className="flex-1  flex-col top-0 sticky ">
          {header}
          <div className="flex h-full ">
            <div className=" bg-gray-50 w-1/5">{leftBar}</div>
            <main className=" flex-col w-full bg-white mb-14 ">{main}</main>
            <nav className="  h-full bg-gray-50 w-1/5">
              <div className="w-full  mx-auto ">{rightBar}</div>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
