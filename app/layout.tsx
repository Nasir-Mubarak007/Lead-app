import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MenuSidebar } from "@/components/MenuSidebar";
import { TopNav } from "@/components/TopNav";
import QuickLinks from "@/components/QuickLinks";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";
import Copilot from "@/public/Copilot_Icon.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronUp,
  FileSliders,
  FileTerminal,
  ListPlus,
  Tags,
  User,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased   p-0 m-0  h-svh`}
      >
        <Dialog>
          <TopNav />
          <SidebarProvider className="">
            <div className="flex w-[12.5rem]  border-r-2 h-max-[95svh] border-gray-400 bg-gray-600/10  ">
              <MenuSidebar />
            </div>
            <main className="flex w-full">
              {children}
              <DialogContent className="max-w-[42rem]">
                <DialogHeader className="flex flex-col gap-4">
                  <div className="flex  gap-x-3">
                    <Image
                      src={Copilot}
                      alt={"copilot"}
                      width={20}
                      height={20}
                    />
                    <p className="font-semibold">Agent Skill</p>
                  </div>

                  <Card>
                    <CardContent>
                      <div className="flex w-full justify-between items-center mb-6 mt-5">
                        <p className="w-full  text-sm font-semibold">
                          Check if on-hand inventory will allow orders to ship
                          without delay.
                        </p>

                        <ChevronUp />
                      </div>

                      <p>
                        When{" "}
                        <span className="inline-flex text-xs text-primary bg-primary/15 rounded-sm px-2 items-center gap-x-3">
                          <User className="size-3" /> any vendor
                        </span>{" "}
                        sends an email with changes to{" "}
                        <span className="inline-flex text-xs text-primary bg-primary/15 rounded-sm px-2 items-center gap-x-3">
                          <FileSliders className="size-3" /> Confirmed purchase
                          orders
                        </span>
                        . Check if the resulting
                        <span className="inline-flex text-xs text-primary bg-primary/15 rounded-sm px-2 items-center gap-x-3">
                          <ListPlus className="size-3" /> on-board inventory
                        </span>
                        will allow{" "}
                        <span className="inline-flex text-xs text-primary bg-primary/15 rounded-sm px-2 items-center gap-x-3">
                          <Tags className="size-3" /> all sales orders
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </DialogHeader>
                <DialogFooter>
                  <div className="flex flex-col justify-start w-full gap-y-4 mt-4">
                    <div className="flex gap-x-3">
                      <FileTerminal className="text-primary" />
                      <p className="font-semibold">Enable email access</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Allow the agent to access email inboxes to read mail from
                      known vendors
                    </p>
                    <div className="flex items-center gap-2">
                      <Input className="flex-1" />{" "}
                      <Button className="text-white">Allow access</Button>
                    </div>
                  </div>
                </DialogFooter>
              </DialogContent>
            </main>
            <QuickLinks />
          </SidebarProvider>
        </Dialog>
      </body>
    </html>
  );
}
