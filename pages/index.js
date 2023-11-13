import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const code = "KOR";

  const router = useRouter();

  const clickButton = () => {
    router.push("/search");
  };

  return (
    <div>
      Home Page
      <div>
        <button onClick={clickButton}>Search 페이지로 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search 페이지로 이동</Link>
      </div>
      <div>
        <Link
          href={{
            pathname: "/country/[code]", //컴포넌트 이름 작성
            query: { code: code },
          }}
        >
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
