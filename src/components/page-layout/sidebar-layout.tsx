import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  BellIcon,
  HomeIcon,
  LineChartIcon,
  LockIcon,
  MenuIcon,
  Package2Icon,
  PackageIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UsersIcon,
} from "../icon";
import { DarkModeToggle } from "./dark-mode-toggle";
import { InviteSidebarCTA } from "./sidebar-cta";
import { MobileSidebarLink, SidebarLink } from "./sidebar-link";
import {
  ClockIcon,
  FolderInputIcon,
  TrashIcon,
  StarIcon,
  FolderIcon,
} from "lucide-react";
import { HeaderSearchBar } from "./header-search-bar";

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r dark:border-stone-800 bg-stone-100/40 md:block dark:bg-stone-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b dark:border-stone-800 px-4 lg:h-[60px] lg:px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="/drive/home"
            >
              <Package2Icon className="h-6 w-6" />
              <span className="">Lonestar Share</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <SidebarLink href="/drive/home">
                <HomeIcon className="h-5 w-5" />
                Home
              </SidebarLink>
              <SidebarLink href="/drive/my-uploads">
                <FolderInputIcon className="h-5 w-5" />
                My Uploads
              </SidebarLink>
              <SidebarLink href="/drive/shared-with-me">
                <FolderIcon className="h-5 w-5" />
                Shared with me
              </SidebarLink>
              <SidebarLink href="/drive/recent">
                <ClockIcon className="h-5 w-5" />
                Recent
              </SidebarLink>
              <SidebarLink href="/drive/starred">
                <StarIcon className="h-4 w-4" />
                Starred
              </SidebarLink>
              <SidebarLink href="/drive/trash">
                <TrashIcon className="h-4 w-4" />
                Trash
              </SidebarLink>
            </nav>
          </div>
          <InviteSidebarCTA />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b dark:border-stone-800 bg-stone-100/40 px-4 lg:h-[60px] lg:px-6 dark:bg-stone-800/40">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="shrink-0 md:hidden"
                size="icon"
                variant="outline"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col" side="left">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  className="flex items-center gap-2 text-lg font-semibold mb-2"
                  href="/drive/home"
                >
                  <Package2Icon className="h-6 w-6" />
                  <span className="">Lonestar Share</span>
                </Link>
                <MobileSidebarLink href="/drive/home">
                  <HomeIcon className="h-5 w-5" />
                  Home
                </MobileSidebarLink>
                <MobileSidebarLink href="/drive/my-uploads">
                  <FolderInputIcon className="h-5 w-5" />
                  My Uploads
                </MobileSidebarLink>
                <MobileSidebarLink href="/drive/shared-with-me">
                  <FolderIcon className="h-5 w-5" />
                  Shared with me
                </MobileSidebarLink>
                <MobileSidebarLink href="/drive/recent">
                  <ClockIcon className="h-5 w-5" />
                  Recent
                </MobileSidebarLink>
                <MobileSidebarLink href="/drive/starred">
                  <StarIcon className="h-4 w-4" />
                  Starred
                </MobileSidebarLink>
                <MobileSidebarLink href="/drive/trash">
                  <TrashIcon className="h-4 w-4" />
                  Trash
                </MobileSidebarLink>
              </nav>
              <InviteSidebarCTA isMobile={true} />
            </SheetContent>
          </Sheet>
          <HeaderSearchBar />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-full" size="icon" variant="secondary">
                <UserCircleIcon className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <Link href="/settings">
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </Link>
              <Link href="/support">
                <DropdownMenuItem>Support</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DarkModeToggle className="rounded-full" />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
