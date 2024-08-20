import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";
import MenuBar from "./MenuBar";
import SideMenuBar from "../../components/SideMenuBar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return <SessionProvider value={session}>
    <div className="flex min-h-screen flex-col">
      <Navbar/>
      <div className="max-auto flex w-full max-7xl grow gap-5 p-5">
      <SideMenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm lg:block lg:px-5 xl:w-80" />
       {children}
      </div>
      <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
    </div>
  </SessionProvider>;
}
