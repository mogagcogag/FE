import Link from "next/link";
import { GlobalHeader } from "./styles";

const Header = () => {
  return (
    <GlobalHeader>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="gnb">
              <div className="gnb-left">
                <button
                  type="button"
                  aria-label="나의 메뉴 열기 버튼"
                  className="sm-only"
                >
                  <i className="ic-menu"></i>
                </button>

                <h1>
                  <Link href="/">
                    <a>
                      <img src="/assets/logo.svg" alt="코스모" />
                    </a>
                  </Link>
                </h1>
              </div>

              <div className="gnb-right">
                <button
                  type="button"
                  aria-label="모집하기 "
                  className="sm-hidden btn-40 btn-primary"
                >
                  모집하기
                </button>

                <button type="button" aria-label="로그인" className="sm-hidden">
                  로그인
                </button>

                <button type="button" aria-label="알림">
                  <i className="ic-bell"></i>
                </button>

                <nav className="sm-hidden">
                  <h2 className="visually-hidden">메뉴</h2>
                  <ul>
                    <li>
                      <Link href="/my">
                        <a>
                          <i className="ic-user"></i> 내정보
                        </a>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        aria-label="로그인"
                        className="sm-only"
                      >
                        로그인
                      </button>
                    </li>
                    <li>
                      <button type="button" aria-label="로그아웃">
                        <i className="ic-log-out"></i> 로그아웃
                      </button>
                    </li>
                  </ul>
                </nav>

                <Link href="/write">
                  <a className="sm-only" aria-label="모집하기">
                    <i className="ic-write"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalHeader>
  );
};

export default Header;
