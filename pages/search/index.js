import { fetchSearchResults } from "@/api";
import CountryList from "@/components/CountryList";
import Searchbar from "@/components/SearchBar";
import SubLayout from "@/components/SubLayout";
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
      <Searchbar q={q} />
      <CountryList countries={countries} />
    </>
  );
}
Search.Layout = SubLayout;
