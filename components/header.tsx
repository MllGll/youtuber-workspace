"use client";

import * as React from "react";
import ChannelSwitcher from "./channel-switcher";
import { UserNav } from "./user-nav";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 px-8">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-xl font-semibold">
                Youtuber Workspace
              </Link>
              <ChannelSwitcher />
            </div>
            <div className="ml-auto flex items-center ">
              <UserNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
