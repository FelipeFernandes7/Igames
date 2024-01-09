"use client";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";

export function Favorite() {
  const [value, setValue] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameValue, setGameValue] = useState("");

  function handleButton() {
    setShowInput((input) => !input);
    if (value !== "") {
      setGameValue(value);
    }
    setValue("");
  }

  return (
    <div className="w-full bg-zinc-800 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3 transition-all duration-300">
          <input
            className="w-full bg-zinc-700 text-white outline-none border-0 rounded-lg px-2 h-8 text-base"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className={`p-1 active:scale-95 transition-all duration-300 ${
              value !== "" ? "bg-green-600 rounded-lg" : ""
            }`}
            onClick={handleButton}
          >
            {value !== "" ? (
              <MdOutlineDone size={22} color={"#fff"} />
            ) : (
              <FiX size={24} color={"#fff"} />
            )}
          </button>
        </div>
      ) : (
        <button
          onClick={handleButton}
          className="bg-zinc-700 rounded-lg p-2 self-start active:scale-110 duration-200 transition-all"
        >
          <FiEdit size={23} color={"#fff"} />
        </button>
      )}
      {gameValue && (
        <div>
          <span className=" text-white">Jogo Favorito</span>
          <p className=" font-bold text-white">{gameValue}</p>
        </div>
      )}
      {!gameValue && <p className="font-bold text-white">Adicionar Jogo</p>}
    </div>
  );
}
