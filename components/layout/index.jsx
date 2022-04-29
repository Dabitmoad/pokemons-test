import React, { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

const MainLayout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
