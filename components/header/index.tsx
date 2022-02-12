import Link from "next/link";

const Header = () => {
  return (
    <header className="global-header">
      <div className="gnb">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="gnb-wrapper">
                <div className="gnb-left">
                  <button
                    type="button"
                    aria-label="나의 메뉴 열기 버튼"
                    className="sm-only gnb-icon-btn"
                  >
                    <i className="ic-menu"></i>
                  </button>

                  <h1 className="gnb-logo">
                    <Link href="/">
                      <a>
                        <img src="/assets/logo.svg" alt="코스모" />
                      </a>
                    </Link>
                  </h1>
                </div>

                <div className="gnb-right">
                  <div className="btn-group">
                    <Link href="/write">
                      <a>
                        <button
                          type="button"
                          aria-label="모집하기"
                          className="sm-hidden btn-40 btn-primary gnb-btn-write"
                        >
                          모집하기
                        </button>
                      </a>
                    </Link>

                    <Link href="/login">
                      <a>
                        <button
                          type="button"
                          aria-label="로그인"
                          className="sm-hidden btn-40 btn-primary"
                        >
                          로그인
                        </button>
                      </a>
                    </Link>

                    <Link href="/write">
                      <a className="sm-only gnb-icon-btn" aria-label="모집하기">
                        <i className="ic-write"></i>
                      </a>
                    </Link>

                    {/* <button type="button" aria-label="알림" className="gnb-icon-btn">
                    <i className="ic-bell"></i>
                  </button> */}
                  </div>

                  {/* <nav className="gnb-nav sm-hidden">
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul className="gnb-nav-list">
                    <li className="gnb-nav-item">
                      <Link href="/my">
                        <a>
                          <i className="ic-user"></i> 내정보
                        </a>
                      </Link>
                    </li>
                    <li className="gnb-nav-item">
                      <button
                        type="button"
                        aria-label="로그인"
                        className="sm-only"
                      >
                        로그인
                      </button>
                    </li>
                    <li className="gnb-nav-item">
                      <button type="button" aria-label="로그아웃">
                        <i className="ic-log-out"></i> 로그아웃
                      </button>
                    </li>
                  </ul>
                </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
