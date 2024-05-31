import React from "react";
import SetupNav from "./SetupNav";
import Poster from "./Poster";
import Pro from "./Pro";
import Qution from "./Qution";
import Pos from "./Pos";
import Google from "./Google";
import New from "../Mid/New";

const Setup = () => {
  return (
    <div style={{ marginLeft: "50px", marginRight: "50px" }}>
      <SetupNav />
      <Google/>
      <Poster />
      <Pro />
      <Qution />
      <Pos />
      <New/>
    </div>
  );
};

export default Setup;
