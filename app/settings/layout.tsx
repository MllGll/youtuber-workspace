import { Header } from "@/components/header";
import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="">{children}</div>;
    </>
  );
};

export default SettingsLayout;
