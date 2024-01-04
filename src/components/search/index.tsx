"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (search === "") return;
    router.push(`/game/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full flex items-center bg-zinc-800 gap-2 justify-between rounded-xl p-3 md:max-w-[600px] transition-all duration-300"
    >
      <input
        className="w-full bg-zinc-800 text-white outline-none "
        type="text"
        placeholder="Procurando algum jogo?..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button type="submit">
        <FiSearch size={24} color={"#fff"} />
      </button>
    </form>
  );
}
