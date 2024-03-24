import { HeaderLayout } from "@/components/page-layout/header-layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <HeaderLayout>{children}</HeaderLayout>;
}
