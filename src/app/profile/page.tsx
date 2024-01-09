import { Container } from "@/components/container";
import { Favorite } from "./components/favorite";
import Image from "next/image";

import userImg from "../../../public/user.png";

import { FiSettings } from "react-icons/fi";
import { FaShareFromSquare } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu Perfil",
  description: "Perfil SniperUser",
};

export default function Profile() {
  return (
    <main className="w-full text-black">
      <Container>
        <section className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex flex-col items-center gap-4 text-lg sm:flex-row justify-center sm:justify-normal">
            <Image
              className="rounded-full w-56 h-56"
              objectFit="cover"
              alt={"Profile Image"}
              src={userImg}
            />
            <h1 className="font-bold text-2xl text-white">SniperUser</h1>
          </div>
          <div className="sm:absolute top  right-0 gap-3 flex items-center justify-center">
            <button className="bg-zinc-800 flex items-center px-4 py-3 rounded-lg text-white font-bold text-sm active:scale-95 transition-all duration-300">
              <FiSettings size={24} color={"#fff"} />
            </button>
            <button className="bg-zinc-800 flex items-center px-4 py-3 rounded-lg text-white font-bold text-sm active:scale-95 transition-all duration-300">
              <FaShareFromSquare size={24} color={"#fff"} />
            </button>
          </div>
        </section>
        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
          <div className="flex-grow flex-wrap">
            <Favorite />
          </div>
        </section>
      </Container>
    </main>
  );
}
