import { Container } from "@/components/container";
import { DailyGame } from "@/components/dailygames";
import { Games } from "@/components/games";
import { Search } from "@/components/search";
import { GameProps } from "@/utils/types";

import Link from "next/link";

async function getDailyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      {
        next: {
          revalidate: 320,
        },
      },
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}
async function getDailyGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: {
        revalidate: 320,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const dailyGame: GameProps = await getDailyGame();
  const games: GameProps[] = await getDailyGamesData();

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-xl mt-8 mb-5 px-3 whitespace-pre-wrap">
        Separamos um Jogo exclusivo para você
      </h1>
      <Link href={`/game/${dailyGame.id}`}>
        <section className="w-full bg-black rounded-lg ">
          <DailyGame image_url={dailyGame.image_url} title={dailyGame.title} />
        </section>
      </Link>
      <Container>
        <div className="flex justify-center items-center mt-4 w-full ">
          <Search />
        </div>
        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((data) => (
            <Games key={data.id} data={data} />
          ))}
        </section>
      </Container>
    </div>
  );
}
