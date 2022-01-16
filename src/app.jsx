import React, { useState, useEffect } from "react";
import { Route, Link } from "wouter";

import PageRouter from "./components/pageRouter.jsx";
import Header from "./components/header.jsx";

import "./styles/styles.sass";

export default function App() {
  return (
    <>
      <Header />

      <PageRouter />
      
    </>
  );
}
