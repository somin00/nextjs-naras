import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }],
    fallback: "blocking",
    //paths에 지정하지 않은 경우의 요청이 들어왔을 때 처리하는 옵션
    //blocking: paths에 존재하지 않으면 실시간으로 생성하여 정적 페이지 생성
    //true: props가 없는 버전으로 html(fallback 상태) 생성 후 props 계산하여 데이터가 있는 상태의 페이지 반환
    //-> 컴포넌트에서 router.isfallback 으로 fallback 상태인지 아닌지 알 수 있음
  };
};

//경로에 해당하는 페이지를 사전에 만들어야 함
export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: {
      country,
    },
  };
};
