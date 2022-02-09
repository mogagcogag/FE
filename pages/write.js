import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Write = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>모집글 작성 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <div>모집글</div>
    </AppLayout>
  );
};

export default Write;
