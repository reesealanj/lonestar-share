import Link from "next/link";
import { Package2Icon } from "../icon";

export function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-1 lg:grid-cols-1">
      <div className="flex h-14 items-center border-b dark:border-stone-800 px-4 lg:h-[60px] lg:px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <Package2Icon className="h-6 w-6" />
          <span className="">Lonestar Share</span>
        </Link>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        {children}
      </main>
    </div>
  );
}
