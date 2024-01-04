import { GameProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

import { BiRightArrowCircle } from "react-icons/bi";

interface IGamesCardProps {
  data: GameProps;
}

export function Games({ data }: IGamesCardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-zinc-800 rounded-xl mb-5">
        <div className="w-full relative h-56 hover:scale-105 transition-all duration-300">
          <Image
            className="w-full rounded-t-md"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
            src={data.image_url}
            alt={data.title}
            quality={100}
            objectFit="cover"
            fill
          />
        </div>
        <div className="w-full p-3 flex items-center mt-4 justify-between">
          <p className="text-sm font-bold px-2 text-white text-ellipsis truncate whitespace-nowrap overflow-hidden ">
            {data.title}
          </p>
          <BiRightArrowCircle size={24} color={"#fff"} />
        </div>
      </section>
    </Link>
  );
}
