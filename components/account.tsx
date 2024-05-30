"use client";

import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useState } from "react";

const profileFormSchema = z.object({
  name: z.string().min(1),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(1),
});

export default function Account() {
  // adicionar imagem de usuário
  const [showPassword, setShowPassword] = useState(false);

  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "",
    },
  });

  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  async function onProfileSubmit(values: z.infer<typeof profileFormSchema>) {}

  async function onPasswordSubmit(values: z.infer<typeof passwordFormSchema>) {}

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Editar Perfil</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Form {...profileForm}>
            <form
              onSubmit={profileForm.handleSubmit(onProfileSubmit)}
              className="space-y-8"
            >
              <FormField
                control={profileForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome de Usuário</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button>Salvar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Alterar Senha</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Form {...passwordForm}>
            <form
              onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}
              className="space-y-8"
            >
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha Atual</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nova Senha</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="showPassword"
                  onClick={() => setShowPassword(!showPassword)}
                />
                <Label htmlFor="showPassword">Mostrar senhas</Label>
              </div>
              <Button>Confirmar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Excluir Conta</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">Excluir Conta</Button>
        </CardContent>
      </Card>
    </div>
  );
}
