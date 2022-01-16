import * as React from "react";
import { Link } from "wouter";
import accountForm from "./accountForm";
import "./accountFormPage.sass";

class accountFormPage extends React.Component {
  render() {
    const { pageTitle, isLogin, handler, pageText, pageLinkText } = this.props;

    return (
      <div className="account-form-page-wrapper">
        <div className="account-form-page">
          <h1>{pageTitle}</h1>
          <div className={`form-box ${isLogin ? "login" : "signup"}`}>
            <AccountForm handler={handler} isLogin={isLogin} />
            <div className="form-text">
              <span>{pageText}</span>{" "}
              <Link href={isLogin ? "/signup" : "/login"}>{pageLinkText}</Link>
            </div>
          </div>
          <img src="https://media.discordapp.net/attachments/931441761128153128/932136690234052608/IMG_1434.png" />
        </div>
      </div>
    );
  }
}

export default accountFormPage;
