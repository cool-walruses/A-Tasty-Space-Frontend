import React, { useContext } from "react";

import UserContext from "../contexts/userContext";


function Template() {
  const user = useContext(UserContext);

  return (
    <div id="home" className="page"></div>
  );
}

export default Template;