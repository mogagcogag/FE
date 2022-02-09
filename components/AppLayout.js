import propTypes from "prop-types";
import Link from "next/link";
import { useState } from "react";

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Link href="/">
        <a>코스모</a>
      </Link>
      <Link href="/write">
        <a>모집글 작성</a>
      </Link>
      {isLoggedIn ? (
        <Link href="/profile">
          <a>프로필</a>
        </Link>
      ) : (
        <Link href="/login">
          <a>로그인</a>
        </Link>
      )}
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
