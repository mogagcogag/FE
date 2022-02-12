import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

const Signup = () => {
  return (
    <Layout>
      <Head>
        <title>회원가입 | COSMO</title>
      </Head>
      <section className="signup-container">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="signup">
                <div className="signup-logo">
                  <img src="/assets/logo.svg" alt="코스모" />
                </div>

                <div className="signup-desc">
                  <h2 className="signup-title">
                    모든 개발자들의 커뮤니티 플랫폼
                  </h2>
                  <p className="signup-sub">
                    스터디, 프로젝트, 정기 모임 등 다양한 종류의 개발자
                    커뮤니티에 참여해보세요.
                  </p>
                </div>

                <form className="signup-form">
                  <div className="input-group">
                    <input
                      type="nickname"
                      className="form-input"
                      placeholder="닉네임"
                    />
                    <div className="email">
                      <input
                        type="email"
                        className="form-input"
                        placeholder="이메일"
                      />
                      <button className="auth-email-btn btn-primary btn-40">
                        인증메일 발송
                      </button>
                    </div>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="비밀번호"
                    />
                    <input
                      type="password"
                      className="form-input"
                      placeholder="비밀번호 확인"
                    />
                  </div>

                  <div className="agree-group">
                    <div className="agree-list">
                      <input
                        type="checkbox"
                        id="service-agree"
                        className="form-checkbox"
                      />
                      <label
                        htmlFor="service-agree"
                        className="form-checkbox-label"
                      >
                        서비스 이용약관 동의(필수)
                      </label>
                    </div>
                    <div className="agree-content-list">
                      <Link href="/">
                        <a className="service-content-link">보기</a>
                      </Link>
                    </div>
                  </div>

                  <div className="signup-btn-container">
                    <button className="signup-btn btn-primary btn-48">
                      회원가입
                    </button>
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

export default Signup;
