import Head from "next/head";
import AppLayout from "../components/AppLayout";

const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>프로필 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <div>프로필</div>
    </AppLayout>
  );
};

export default Profile;
