import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/SearchBar";
import SubLayout from "@/components/SubLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();

  const { q } = router.query;

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const setData = async () => {
      const countries = await fetchSearchResults(q);
      setCountries(countries);
    };

    if (q) {
      setData();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>NARAS 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS 검색 결과" />
        <meta property="og:description" content="전 세계 국가들의 정보를 확인해보세요" />
      </Head>
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}
Search.Layout = SubLayout;
