import { cn } from "@/lib/utils";

export function SidebarSectionSeparator({
  height = "32px",
  ...rest
}: {
  height?: string;
}) {
  return <div className={cn(`min-h-[${height}]`)}></div>;
}
