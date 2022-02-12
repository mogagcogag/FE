import Layout from "../components/layout";
import Head from "next/head";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>로그인 | COSMO</title>
      </Head>
      <section className="login-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
