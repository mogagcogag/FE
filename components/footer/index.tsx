import Link from "next/link";

const Footer = () => {
  return (
    <footer className="global-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <h3 className="global-footer-title">
              고객센터 <i className="ic-chevron-right"></i>
            </h3>
            <Link href="tel:01059668247">
              <a className="global-footer-contact">010-5966-8247</a>
            </Link>
            <p className="global-footer-time">
              평일 9:00 ~ 18:00 (주말 &amp; 공휴일 제외)
            </p>

            <dl className="global-footer-details">
              <div className="global-footer-detail">
                <dt>상호명</dt>
                <dd>후라보노</dd>
              </div>
              <div className="global-footer-detail">
                {" "}
                <dt>이메일(제휴문의)</dt>
                <dd>
                  <address>
                    <Link href="mailto:singularity29@kakao.com">
                      <a>singularity29@kakao.com</a>
                    </Link>
                  </address>
                </dd>
              </div>
              <div className="global-footer-detail">
                <dt>대표이사</dt>
                <dd>김민성</dd>
              </div>
              <div className="global-footer-detail">
                <dt>주소</dt>
                <dd>서울시 동작구 사당동(이수역 도보 5분)</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
