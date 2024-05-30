"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    component: JSX.Element;
    title: string;
  }[];
  section: JSX.Element;
  setSection: (section: JSX.Element) => void;
}

export default function SidebarNav({
  className,
  items,
  section,
  setSection,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <Button
          key={index}
          variant="link"
          onClick={() => setSection(item.component)}
          className={cn(
            section === item.component && "bg-muted",
            "justify-start"
          )}
          style={section === item.component ? { textDecoration: "none" } : {}}
        >
          {item.title}
        </Button>
      ))}
    </nav>
  );
}
