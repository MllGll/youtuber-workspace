"use client";

import Account from "@/components/account";
import SidebarNav from "@/components/sidebar-nav";
import System from "@/components/system";
import { useState } from "react";

const sections = [
  {
    title: "Conta",
    component: <Account />,
  },
  {
    title: "Sistema",
    component: <System />,
  },
];

export default function Settings() {
  const [section, setSection] = useState(sections[0].component);
  return (
    <div className="hidden space-y-6 p-10 pb-16 md:block">
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav
            items={sections}
            section={section}
            setSection={setSection}
          />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{section}</div>
      </div>
    </div>
  );
}
