import { SidebarLayout } from "@/components/page-layout/sidebar-layout";
import { ProvidersWrapper } from "@/components/context/providers-wrapper";

export default function DriveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProvidersWrapper>
      <SidebarLayout>{children}</SidebarLayout>
    </ProvidersWrapper>
  );
}
