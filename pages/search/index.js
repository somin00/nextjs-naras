import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout";

export default function Search({ searchResults }) {
  console.log(searchResults);
  return (
    <ul>
      {searchResults.map((country) => (
        <li key={country.code}>{country.commonName}</li>
      ))}
    </ul>
  );
}
Search.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { q } = context.query;

  let searchResults = null;

  if (q) {
    searchResults = await fetchSearchResults(q);
  }

  return {
    props: {
      searchResults,
    },
  };
};
