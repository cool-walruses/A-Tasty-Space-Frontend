import React, { useContext } from "react";
import accountFormPage from "../components/account/accountFormPage";

class Login extends React.Component {
  render() {
    const { handleTestAccount } = this.props;
    
    return (
      <accountFormPage
        pageTitle="Log In!"
        handler={handleTestAccount}
        isLogin={true}
        pageText="New to A Tasty Space?"
        pageLinkText="Register now!"
      />
    );
  }
}

export default Login;