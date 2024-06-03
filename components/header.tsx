import * as React from "react";
import ChannelSwitcher from "./channel-switcher";
import { UserNav } from "./user-nav";
import { getUser } from "@/services/session";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function Header({ homePath }: { homePath?: boolean }) {
  const user = await getUser();

  if (!user) redirect("/auth");

  return (
    <header>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 px-8">
            <div className="flex items-center space-x-4 ">
              <Link href="/" className="text-3xl font-league">
                <span className="text-redYoutube">Youtuber</span> Workspace
              </Link>
              {homePath && <ChannelSwitcher />}
            </div>
            <div className="ml-auto flex items-center ">
              <UserNav user={user} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
