import { allGames, availableFilters, delay } from "@/utils/endpoint";

const ITEMS_PER_PAGE = 12;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const genre = searchParams.get("genre");
  let page = parseInt(searchParams.get("page") ?? "1");

  let games = allGames;

  if (genre) {
    games = games.filter(
      (game) => game.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  if (page < 1 || isNaN(page)) page = 1;

  // Mock a delay to simulate a real API
  await delay(2000);

  const fromIndex = (page - 1) * ITEMS_PER_PAGE;
  const toIndex = page * ITEMS_PER_PAGE;
  const filteredGames = games.slice(fromIndex, toIndex);
  // NOTE: Found a little bug here, if we fetch games by category, the resulting 'totalPages' will always be 3,
  // even if there are only games to fill a single page. This is the fix for that
  let totalGames = allGames;
  if (genre) {
    totalGames = games;
  }

  const totalPages = Math.ceil(totalGames.length / ITEMS_PER_PAGE);
  const currentPage = page;

  return Response.json({ games: filteredGames, availableFilters, totalPages, currentPage });
}
