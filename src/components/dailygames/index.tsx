import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";

interface IDailyGameProps {
  image_url: string;
  title: string;
}
export function DailyGame({ image_url, title }: IDailyGameProps) {
  return (
    <div className="w-full relative max-h-96 h-96 rounded-lg">
      <Image
        className="w-full h-80 sm:h-96  opacity-65 hover:opacity-100 transition-all duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        objectFit="cover"
        priority={true}
        src={image_url}
        quality={100}
        alt={title}
        fill={true}
      />
      <div className="absolute bottom-0 p-3 z-20 flex justify-center items-center gap-2">
        <p className="text-white font-bold text-xl">{title}</p>
        <BsArrowRightSquare size={24} color={"#fff"} />
      </div>
    </div>
  );
}
