import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Signup = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>회원가입 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <div>회원가입</div>
    </AppLayout>
  );
};

export default Signup;
