import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/AppLayout";
import { Button } from "antd";

const Login = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <form>
        <Button block>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Button>
      </form>
    </AppLayout>
  );
};

export default Login;
