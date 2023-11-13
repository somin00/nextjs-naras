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

export const getStaticProps = async () => {
  const countries = await fetchCountries();
  return {
    props: {
      countries,
    },
  };
};
