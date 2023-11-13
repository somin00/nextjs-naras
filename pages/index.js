import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.code}>{country.commonName}</li>
      ))}
    </ul>
  );
}

//SSR 서버측에서 컴포넌트로 전달할 데이터 설정
export const getServerSideProps = async () => {
  const countries = await fetchCountries();
  return {
    props: {
      countries,
    },
  };
};
