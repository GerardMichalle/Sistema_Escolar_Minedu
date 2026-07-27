interface Props {
  nombre: string;
  size?: string;
  text?: string;
}

export default function Avatar({ nombre, size = "w-9 h-9", text = "text-xs" }: Props) {
  const iniciales = nombre.split(" ").slice(0, 2).map((n) => n[0]).join("");
  return (
    <div className={`${size} rounded-full bg-indigo-900 text-amber-300 flex items-center justify-center font-bold ${text} shrink-0`}>
      {iniciales}
    </div>
  );
}
