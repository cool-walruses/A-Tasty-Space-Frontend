import React, { useContext } from "react";

import UserContext from "../contexts/userContext";


function Template() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Template</h1>
    </>
  );
}

export default Template;