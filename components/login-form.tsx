"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { EyeIcon } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export default function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await signIn<"credentials">("credentials", {
      ...values,
      redirect: false,
    });

    if (res?.error) {
      toast({
        description: res.error,
        variant: "destructive",
      });
    } else {
      router.push("/");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  {/* <Button variant="link" className="p-0">
                    Esqueci minha senha
                  </Button> */}
                </FormItem>
              )}
            />
            {/* <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Lembrar das próximas vezes</Label>
            </div> */}
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </form>
        </Form>
        {/* <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full"
        >
          Google
        </Button> */}
      </CardContent>
    </Card>
  );
}
