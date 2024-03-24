import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export interface SidebarCTAProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

export function SidebarCTA({ children, title, description }: SidebarCTAProps) {
  return (
    <div className="mt-auto p-4">
      <Card>
        <CardHeader className="p-2 pt-0 md:p-4">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

export function MobileSidebarCTA({
  children,
  title,
  description,
}: SidebarCTAProps) {
  return (
    <div className="mt-auto">
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}

export function InviteSidebarCTA({ isMobile = false }: { isMobile?: boolean }) {
  return isMobile ? (
    <MobileSidebarCTA
      title={"Invite your friends"}
      description={
        "Help get more members and volunteers using this service by sending your friends an invite."
      }
    >
      <Button className="w-full" size="sm">
        Copy Invite
      </Button>
    </MobileSidebarCTA>
  ) : (
    <SidebarCTA
      title={"Invite your friends"}
      description={
        "Help get more members and volunteers using this service by sending your friends an invite."
      }
    >
      <Button className="w-full" size="sm">
        Copy Invite
      </Button>
    </SidebarCTA>
  );
}
