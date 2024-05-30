"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

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

export default function System() {
  const [language, setLanguage] = useState(languages[0].label);

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Tema</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="light" disabled>
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
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Idioma</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          <Select disabled value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[180px]">{language}</SelectTrigger>
            <SelectContent>
              {languages.map((item, index) => (
                <SelectItem key={index} value={item.label}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );
}
