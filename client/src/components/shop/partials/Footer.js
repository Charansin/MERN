import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "#343031", color: "#87598A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        Develop & Design Shopping mall © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default Footer;
