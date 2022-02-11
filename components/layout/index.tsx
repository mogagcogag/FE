import React from "react";
import Head from "next/head";
import Header from "../header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
