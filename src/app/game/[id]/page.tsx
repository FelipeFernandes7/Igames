import { Container } from "@/components/container";
import { GameProps } from "@/utils/types";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";
import { Games } from "@/components/games";
import { Metadata } from "next";

interface IGameParamsProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: IGameParamsProps): Promise<Metadata> {
  const apiUrl = `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`;

  try {
    const response: GameProps = await fetch(apiUrl, {
      next: { revalidate: 60 },
    })
      .then((res) => res.json())
      .catch(() => {
        return {
          title: "IGames Descubra jogos incríveis",
        };
      });
    return {
      title: response.title,
      description: `${response.description.slice(0, 100)}...`,
      openGraph: {
        title: response.title,
        images: [response.image_url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "IGames Descubra jogos incríveis",
    };
  }
}

async function getGameById(id: string) {
  const apiUrl = `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`;

  try {
    const response = await fetch(apiUrl, { next: { revalidate: 60 } });
    return response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data");
  }
}

async function getGameSorted() {
  const apiUrl = `${process.env.NEXT_API_URL}/next-api/?api=game_day`;
  try {
    const response = await fetch(apiUrl, { next: { revalidate: 60 } });
    return response.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Game({ params }: IGameParamsProps) {
  const data: GameProps = await getGameById(params.id);
  const sortedGame: GameProps = await getGameSorted();

  if (!data) return redirect("/");

  return (
    <main className="w-full text-white">
      <div className="bg-black w-full relative h-80 sm:h-96">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-85"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          src={data.image_url}
          alt={data.title}
          quality={100}
          priority
          fill
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label key={item} name={item} />
          ))}
        </div>
        <p className="mt-7 mb-2">
          <strong className="mr-2">Data de Lançamento</strong>
          {data.release}
        </p>
        <h2 className="font-bold text-lg mt-7 mb-2">Jogos recomendados</h2>
        <div className="flex w-full">
          <div className="flex-grow">
            <Games data={sortedGame} />
          </div>
        </div>
      </Container>
    </main>
  );
}
