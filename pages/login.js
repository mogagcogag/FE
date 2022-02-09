import Head from "next/head";
import Link from "next/link";
import { Input, Button } from "antd";
import { useForm } from "react-hook-form";
import AppLayout from "../components/AppLayout";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(errors);

  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>로그인 | 코스모 - 코딩 스터디 모임</title>
      </Head>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          {...register("email", { required: "이메일을 입력해주세요." })}
          placeholder="이메일"
        />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "비밀번호는 최소 8자리 이상이어야 합니다.",
            },
          })}
          placeholder="비밀번호"
        />
        <p>{errors.password?.message}</p>
        <input type="submit" />
        <Button block type="link">
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Button>
      </form>
    </AppLayout>
  );
};

export default Login;
