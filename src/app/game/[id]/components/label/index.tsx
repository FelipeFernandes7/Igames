interface LabelProps {
  name: string;
}

export function Label({ name }: LabelProps) {
  return (
    <div className="flex-grow sm:flex-grow-0 py-1 px-3 bg-zinc-800 text-white text-center rounded-lg hover:font-bold duration-200">
      <h1>{name}</h1>
    </div>
  );
}
