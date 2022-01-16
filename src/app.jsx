import React, { useState, useEffect } from "react";
import { Route, Link, useRoute } from "wouter";

import PageRouter from "./components/pageRouter.jsx";
import Header from "./components/header.jsx";

import "./styles/styles.sass";

export default function App() {
  const [match, params] = useRoute("/api/:call*");
  
  if (match) return;
  
  return (
    <>
      <Header />

      <PageRouter />
      
    </>
  );
}
