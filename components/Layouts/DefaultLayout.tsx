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
    <div className="flex flex-col relative min-w-xs h-screen text-primary-800">
      <Header />
      {children}
      {useFooter && <Footer />}
    </div>
  );
};

export default DefaultLayout;
