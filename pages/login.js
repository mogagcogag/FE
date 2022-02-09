import Head from "next/head";
import Link from "next/link";
import { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";

const Login = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <div>로그인</div>
    </AppLayout>
  );
};

export default Login;
