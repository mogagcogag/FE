import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home = ({ allPostsData }: { allPostsData: {}[] }) => {
  return (
    <Layout>
      <Head>
        <title>COSMO | 코딩 스터디 모임</title>
      </Head>

      <section>
        <h2 className="visually-hidden">카테고리</h2>
      </section>
      <section>
        <h2 className="visually-hidden">모집글목록</h2>
      </section>
    </Layout>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const allPostsData = await fetch(``);
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };
