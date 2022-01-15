import React, { useState, useEffect } from "react";
import { Route, Link } from "wouter";

import PageRouter from "./components/router.jsx";
import Header from "./components/header.jsx";

import "./styles/style.sass";

export default function App() {
  return (
    <>
      <Header />
      
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      
    </>
  );
}
