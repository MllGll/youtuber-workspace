"use client";

import * as React from "react";
import { CaretSortIcon, PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { channels } from "@/app/mocks";

export default function ChannelSwitcher() {
  const [showNewChannelDialog, setShowNewChannelDialog] = React.useState(false);
  const [selectedChannel, setSelectedChannel] = React.useState<string>(
    channels[0].name
  );

  return (
    <Dialog open={showNewChannelDialog} onOpenChange={setShowNewChannelDialog}>
      <Select defaultValue={selectedChannel} onValueChange={setSelectedChannel}>
        <SelectTrigger className="w-[300px]">
          <SelectValue></SelectValue>
          {/* <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" /> */}
        </SelectTrigger>
        <SelectContent>
          {channels.map((channel) => (
            <SelectItem key={channel.name} value={channel.name}>
              <div>{channel.name}</div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <DialogTrigger asChild>
        <Button>
          <PlusCircledIcon className="mr-2 h-5 w-5" />
          Adicionar Canal
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Canal</DialogTitle>
          <DialogDescription>
            Inicie um novo espaço de trabalho.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome do canal</Label>
              <Input id="name" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setShowNewChannelDialog(false)}
          >
            Cancelar
          </Button>
          <Button type="submit">Continuar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
