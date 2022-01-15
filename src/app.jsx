import React, { useState, useEffect } from "react";
import { Route, Link } from "wouter";

import PageRouter from "./components/router.jsx";

import "./styles/style.sass";

export default function Home() {
  return (
    <>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>

      <footer className="footer">
        <div className="links">
          <Link href="/">Home</Link>

          <span className="divider">|</span>

          <Link href="/about">About</Link>
        </div>
      </footer>
    </>
  );
}
