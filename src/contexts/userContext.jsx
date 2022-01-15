import React from "react";

const UserContext = React.createContext({
  isLoggedIn: false,
  account: {},
});

export default UserContext;
