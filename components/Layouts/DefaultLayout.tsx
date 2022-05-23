import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import Footer from "./Footer";

const Header = dynamic((): Promise<any> => import("./Header"), {
  ssr: false,
});
interface DefaultLayoutProps {
  children: ReactNode;
  useFooter?: boolean;
}

const DefaultLayout = ({ children, useFooter = true }: DefaultLayoutProps) => {
  return (
    <>
      <div
        style={{
          height: "100",
          background: "linear-gradient(0deg, #ffff 60%,  #BA0203 40%)",
        }}
      >
        <div className="flex flex-col relative w-full min-w-xs text-primary-800 mx-auto h-screen">
          <Header />
          {children}
          {useFooter && <Footer />}
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
