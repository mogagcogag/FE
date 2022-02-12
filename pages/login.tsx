import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

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
              <div className="login">
                <div className="login-logo">
                  <img src="/assets/logo.svg" alt="코스모" />
                </div>

                <div className="login-desc">
                  <h2 className="login-title">
                    모든 개발자들의 커뮤니티 플랫폼
                  </h2>
                  <p className="login-sub">
                    스터디, 프로젝트, 정기 모임 등 다양한 종류의 개발자
                    커뮤니티에 참여해보세요.
                  </p>
                </div>

                <form className="login-form">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-input"
                      placeholder="이메일"
                    />
                    <input
                      type="password"
                      className="form-input"
                      placeholder="비밀번호"
                    />
                  </div>
                  <div className="option-group">
                    <div className="auto-login-container">
                      <input
                        type="checkbox"
                        id="auto-login"
                        className="form-checkbox"
                      />
                      <label
                        htmlFor="auto-login"
                        className="form-checkbox-label"
                      >
                        자동 로그인
                      </label>
                    </div>

                    <div className="find-pw-container">
                      <Link href="/">
                        <a>비밀번호 찾기</a>
                      </Link>
                    </div>
                  </div>

                  <div className="login-btn-container">
                    <button className="login-btn btn-primary btn-48">
                      로그인
                    </button>
                  </div>

                  <div className="login-signup-container">
                    아직 계정이 없으신가요?&nbsp;
                    <Link href="/signup">
                      <a className="login-signup-link">회원가입</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
