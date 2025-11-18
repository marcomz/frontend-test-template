import PageTitle from "../components/PageTitle";
import Catalog from "../components/Catalog";

export default async function Home({ searchParams }: any) {
  const genre = (await searchParams).genre;
  const url = `${process.env.PROJECT_URL}/api/games${genre ? `?genre=${genre}` : ''}`;
  const data = await fetch(url);
  const result = await data.json();

  return (
    <>
      <PageTitle />
      <Catalog data={result} genreFromUrl={genre} />
    </>
  )
}
