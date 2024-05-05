import { Header } from "@/components/header";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";

export default async function Home() {
  // const session = useSession();
  // const session = await getServerSession();
  // if (!session) redirect("/auth");

  return (
    <>
      <Header />
    </>
  );
}
