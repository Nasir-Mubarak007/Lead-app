import Image from "next/image";
import React from "react";
import Mail from "../public/mail.png";
import { Linkedin, Pencil, SendHorizontal, Stars, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "postcss";
import { Label } from "recharts";

export function LeadInfo() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-6 items-center">
        <span className="flex gap-3 items-center">
          <Image
            src={Mail}
            alt={"mail"}
            width={"10"}
            className="size-9 object-contain"
          />
          <p className="font-semibold">Engage with Jane Reyes</p>
        </span>

        <X className="size-7" />
      </div>

      <Card className="mb-3 shadow-lg">
        <CardHeader className="flex items-center flex-row gap-x-3 -mb-3">
          <div className="relative size-fit rounded-full p-0">
            <Avatar>
              <AvatarImage src={""} />
              <AvatarFallback className="bg-primary text-white">
                JR
              </AvatarFallback>
            </Avatar>
            <span
              className={cn(
                `absolute size-3 bottom-0 right-0 bg-red-500 rounded-full`
              )}
            ></span>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-left">Jane Reyes</p>
            <p className="flex items-center text-muted-foreground text-xs">
              <Linkedin
                className="text-white bg-primary size-6 p-1 rounded-md mr-2"
                fill="white"
              />
              <div className="border-l border-l-muted-foreground h-[70%] mr-2" />
              COO, Northwind Traders
            </p>
          </div>
        </CardHeader>
      </Card>
      <div className="rounded-sm p-3 w-full bg-primary/5">
        <Card className="flex items-center justify-between p-4 bg-primary/15 rounded-xl">
          <div className="flex items-center justify-between">
            <Stars fill="blue" className="text-primary" />
            jane maybe interested in
          </div>
          <div className="flex gap-2 ">
            <Button variant={"outline"} className="text-primary gap-3">
              <Pencil />
              Edit
            </Button>
            <Button className="text-white gap-3">
              <SendHorizontal />
              Approve and send
            </Button>
          </div>
        </Card>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="flex w-full g-4 justify-start">
            <TabsTrigger value="account" type="submit">
              Account
            </TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <div className="bg-primary/20 rounded-lg relative p-3 space-y-2">
                <div className="flex gap-3 mb-3 font-semibold items-center text-sm text-primary">
                  Why I pick this lead
                </div>
                <p className="text-muted-foreground text-sm text-left">
                  <li>
                    jane is a key <b>decision maker</b> and was browsing{" "}
                    <b>expresso machines</b> on First Coffee&apos;s Website.
                  </li>
                  <li>
                    jane is a key <b>decision maker</b> and was browsing{" "}
                    <b>expresso machines</b> on First Coffee&apos;s Website.
                  </li>
                  <li>
                    jane is a key <b>decision maker</b> and was browsing{" "}
                    <b>expresso machines</b> on First Coffee&apos;s Website.
                  </li>
                </p>

                <span className="bg-white p-2 absolute -top-3 -right-3 rounded-xl">
                  <Stars fill="blue" className="text-primary" />
                </span>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardContent className="space-y-2"></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Card>
        <CardHeader>
          <p className="font-semibold text-sm">About Jane</p>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
            cum atque nam aperiam ducimus ad praesentium quaerat, officia
            assumenda similique? Aspernatur distinctio libero vitae totam
            accusantium, fuga ipsum vel id.
          </p>
        </CardHeader>
      </Card>
    </div>
  );
}
