import React from "react";
import Head from "next/head";
import Header from "../header";
import Footer from "../footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>{/* <link rel="icon" href="/favicon.ico" /> */}</Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
