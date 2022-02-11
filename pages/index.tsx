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
        <div>
          <button type="button" className="btn-primary btn-32">
            버튼입니다
          </button>
          <button type="button" className="btn-secondary btn-32">
            버튼입니다
          </button>
          <button type="button" className="btn-outlined btn-32">
            버튼입니다
          </button>
          <button type="button" className="btn-ghost btn-32">
            버튼입니다
          </button>
        </div>

        <div>
          <button type="button" className="btn-primary btn-40">
            버튼입니다
          </button>
          <button type="button" className="btn-secondary btn-40">
            버튼입니다
          </button>
          <button type="button" className="btn-outlined btn-40">
            버튼입니다
          </button>
          <button type="button" className="btn-ghost btn-40">
            버튼입니다
          </button>
        </div>

        <div>
          <button type="button" className="btn-primary btn-48">
            버튼입니다
          </button>
          <button type="button" className="btn-secondary btn-48">
            버튼입니다
          </button>
          <button type="button" className="btn-outlined btn-48">
            버튼입니다
          </button>
          <button type="button" className="btn-ghost btn-48">
            버튼입니다
          </button>
        </div>

        <div>
          <button type="button" className="btn-primary btn-55">
            버튼입니다
          </button>
          <button type="button" className="btn-secondary btn-55">
            버튼입니다
          </button>
          <button type="button" className="btn-outlined btn-55">
            버튼입니다
          </button>
          <button type="button" className="btn-ghost btn-55">
            버튼입니다
          </button>
        </div>

        <div>
          <button type="button" className="btn-primary btn-55" disabled>
            버튼입니다
          </button>
          <button type="button" className="btn-secondary btn-55" disabled>
            버튼입니다
          </button>
          <button type="button" className="btn-outlined btn-55" disabled>
            버튼입니다
          </button>
          <button type="button" className="btn-ghost btn-55" disabled>
            버튼입니다
          </button>
        </div>

        <div>
          <div className="select-group is-active">
            <select className="form-select">
              <option value="1">선택사항 1</option>
              <option value="2">선택사항 2</option>
              <option value="3">선택사항 3</option>
              <option value="4">선택사항 4</option>
              <option value="5">선택사항 5</option>
            </select>
            <i className="ic-chevron-down" aria-hidden></i>
          </div>

          <div className="input-group">
            <i className="ic-search" aria-hidden></i>
            <input
              className="form-input"
              type="text"
              placeholder="스토어 검색"
            />
          </div>
        </div>
      </section>
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
