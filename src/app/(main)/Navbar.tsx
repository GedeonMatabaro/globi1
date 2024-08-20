
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import MenuBar from "./MenuBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
  <div className="flex items-center gap-5">
    <Link href="/" className="text-2xl font-bold text-primary">
      Globi
    </Link>
    <SearchField />
  </div>
  <MenuBar className="hidden sm:flex sm:flex-1 sm:justify-center" />
  
  <UserButton className="ml-auto lg:ml-0" />
</div>
    </header>
  );
}
