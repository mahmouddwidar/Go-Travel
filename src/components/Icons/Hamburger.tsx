import { useMenuContext } from "../../../context/MobileMenuContext";

export default function Hamburger() {
  const { setMenuOpened } = useMenuContext();

  return (
    <button
      className="hidden cursor-pointer flex-col justify-center gap-y-1.75 max-lg:flex"
      onClick={() => setMenuOpened(true)}
    >
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
      <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-black" />
    </button>
  );
}
