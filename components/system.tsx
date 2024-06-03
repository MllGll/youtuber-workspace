"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const languages = [
  {
    label: "Português",
    value: "pt-br",
  },
  {
    label: "Inglês",
    value: "en",
  },
];

const getLanguage = {
  "pt-br": "Português",
  en: "Inglês",
};

const appearanceFormSchema = z.object({
  theme: z.string().min(1),
  language: z.enum(["pt-br", "en"]),
});

export default function System() {
  const { theme, setTheme } = useTheme();

  const form = useForm<z.infer<typeof appearanceFormSchema>>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: theme,
      language: "pt-br",
    },
  });

  async function onSubmit(values: z.infer<typeof appearanceFormSchema>) {}

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tema</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          setTheme(value);
                        }}
                        {...field}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="system" id="r1" />
                          <Label htmlFor="r1">Sistema</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="light" id="r2" />
                          <Label htmlFor="r2">Claro</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="dark" id="r3" />
                          <Label htmlFor="r3">Escuro</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Idioma</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        {...field}
                      >
                        <SelectTrigger className="w-[180px]">
                          {getLanguage[field.value]}
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button>Salvar preferências</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
