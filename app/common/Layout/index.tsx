import React from "react";
import { Outlet } from "react-router";

import "./style.scss";
import Footer from "../Footer";
import Header from "../Header";
const Layout = () => {
 
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
     <Footer />
    </>
  );
};

export default Layout;
