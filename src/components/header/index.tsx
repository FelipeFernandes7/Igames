import Link from "next/link";

import { LiaGamepadSolid } from "react-icons/lia";
import { RiGameFill } from "react-icons/ri";

export function Header() {
  return (
    <header className="w-full h-28 bg-[#232323] px-2">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center items-center gap-4">
          <Link href={"/"}>
            <LiaGamepadSolid size={44} color="#cbd5e1" />
          </Link>
          <Link href={"/"}>Games</Link>

          <Link href={"/profile"}>Perfil</Link>
        </nav>
        <div className="hidden sm:flex justify-center items-center ">
          <Link href={"/profile"}>
            <RiGameFill size={34} color="#cbd5e1" />
          </Link>
        </div>
      </div>
    </header>
  );
}
