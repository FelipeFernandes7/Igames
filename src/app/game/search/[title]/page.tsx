import { Container } from "@/components/container";
import { GameProps } from "@/utils/types";
import { Search as Input } from "@/components/search";
import { Games } from "@/components/games";

interface SearchParamsProps {
  params: {
    title: string;
  };
}

async function getData(title: string) {
  const apiUrl = `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`;

  try {
    const response = await fetch(apiUrl);
    return response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch data");
  }
}

export default async function Search({ params }: SearchParamsProps) {
  const games: GameProps[] = await getData(params.title);
  return (
    <main className="w-full text-white">
      <Container>
        <div className="flex justify-center items-center mt-4 w-full ">
          <Input />
        </div>
        <h1 className=" font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base
        </h1>
        {!games && (
          <p className="font-bold text-sm text-white">
            Ops, não conseguimos obter respostas pelo jogo "
            <span className="text-indigo-500 text-sm">{params.title}</span>" :(
          </p>
        )}
        <section>
          <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games && games.map((data) => <Games key={data.id} data={data} />)}
          </section>
        </section>
      </Container>
    </main>
  );
}
