import Link from "next/link";
import { Badge } from "../ui/badge";

export interface SidebarLinkProps {
  href?: string;
  badgeContent?: string;
  children?: React.ReactNode;
}

export function SidebarLink({
  href,
  badgeContent,
  children,
  ...rest
}: SidebarLinkProps) {
  return children ? (
    <Link
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-stone-500 transition-all hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
      href={href ?? "#"}
      {...rest}
    >
      {children}
      {badgeContent ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badgeContent}
        </Badge>
      ) : null}
    </Link>
  ) : (
    <div
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-stone-500 transition-all hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
      {...rest}
    >
      {children}
      {badgeContent ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badgeContent}
        </Badge>
      ) : null}
    </div>
  );
}

export function MobileSidebarLink({
  href,
  badgeContent,
  children,
  ...rest
}: SidebarLinkProps) {
  return children ? (
    <Link
      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50"
      href={href ?? "#"}
      {...rest}
    >
      {children ?? null}
      {badgeContent ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badgeContent}
        </Badge>
      ) : null}
    </Link>
  ) : (
    <div
      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-50"
      {...rest}
    >
      {children ?? null}
      {badgeContent ? (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {badgeContent}
        </Badge>
      ) : null}
    </div>
  );
}
