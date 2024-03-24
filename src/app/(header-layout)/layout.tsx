import { ThemeProvider } from "@/components/context/theme-provider";
import { HeaderLayout } from "@/components/page-layout/header-layout";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <HeaderLayout>{children}</HeaderLayout>
    </ThemeProvider>
  );
}
