import { GetServerSideProps } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home = ({ allPostsData }: { allPostsData: {}[] }) => {
  return (
    <Layout>
      <Head>
        <title>COSMO | 코딩 스터디 모임</title>
      </Head>
      <section>section</section>
      <section>posts</section>
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
