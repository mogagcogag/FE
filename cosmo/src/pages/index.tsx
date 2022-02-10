import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "~/components/AppLayout";
import styles from "~/styles/Home.module.scss";
import "tailwindcss/tailwind.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>COSMO - 코딩 스터디 모임</title>
        <meta
          name="description"
          content="트렌디한 개발자들의 커뮤니티 사이트"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>hello</h1>
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <p className="text-white font-extrabold text-3xl md:text-5xl">
            {" "}
            Ghostwind CSS
          </p>
          <p className="text-xl md:text-2xl text-gray-500">
            {" "}
            Welcome to my Blog{" "}
          </p>
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;
