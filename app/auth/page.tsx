import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/login-form";
import RegisterForm from "@/components/register-form";
import { authOptions } from "@/services/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Auth() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Já tenho uma conta</TabsTrigger>
        <TabsTrigger value="register">Ainda não tenho uma</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}
