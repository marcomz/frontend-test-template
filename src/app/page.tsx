import PageTitle from "../components/PageTitle.tsx";
import Catalog from "../components/Catalog.tsx";

export default async function Home({ searchParams }) {
  const genre = (await searchParams).genre;
  let url = `${process.env.PROJECT_URL}/api/games${genre ? `?genre=${genre}` : ''}`;
  const data = await fetch(url);
  const result = await data.json();

  return (
    <>
      <PageTitle />
      <Catalog data={result} genreFromUrl={genre} />
    </>
  )
}
