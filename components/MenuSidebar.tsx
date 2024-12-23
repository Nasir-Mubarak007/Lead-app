"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  Activity,
  ChevronDown,
  ChevronsUpDown,
  ClipboardCheck,
  FileArchive,
  FileClock,
  FileSpreadsheet,
  FileSymlink,
  FileText,
  FolderOpen,
  Home,
  Menu,
  PackageIcon,
  PhoneIncoming,
  Pin,
  ReceiptJapaneseYenIcon,
  Rocket,
  Slack,
  Speaker,
  Timer,
  User2,
  Users2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Recent",
    url: "/recent",
    icon: Timer,
  },
  {
    title: "Pinned",
    url: "/pinned",
    icon: Pin,
  },
];

const menuLists = [
  {
    label: "My work",
    items: [
      {
        title: "sales accelerator",
        url: "/sales-accelerator",
      },
      {
        title: "Dashboard",
        url: "/dashboard",
      },
      {
        icon: ClipboardCheck,
        title: "Activities",
        url: "/activity",
      },
    ],
  },
  {
    label: "Customers",
    items: [
      {
        title: "Accounts",
        url: "/accounts",
      },
      {
        title: "Contacts",
        url: "/contacts",
      },
    ],
  },
  {
    label: "Sales",
    items: [
      {
        title: "Leads",
        url: "/leads",
      },
      {
        title: "Opportunities",
        url: "/opportunities",
      },
      {
        title: "Competitors",
        url: "/competitors",
      },
    ],
  },
  {
    label: "Collateral",
    items: [
      {
        title: "Quotes",
        url: " /quotes ",
      },
      {
        title: "Orders",
        url: "/orders",
      },
      {
        title: "Invoices",
        url: "/Invoices",
      },
      {
        title: "Products",
        url: "/products",
      },
      {
        title: "Sales Literature",
        url: "/lit",
      },
    ],
  },
  {
    label: "Marketing",
    items: [
      {
        title: "MarketingLists",
        url: "/market",
      },
      {
        title: "Quick Campaigns",
        url: "/campaign",
      },
    ],
  },
  {
    label: "Performance",
    items: [
      {
        title: "MarketingLists",
        url: "/market",
      },
      {
        title: "Quick Campaigns",
        url: "/campaign",
      },
    ],
  },
];

export function MenuSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="p-3 sm:p-1 pr-0 max-h-[95svh]" collapsible="none">
      <Menu className="mx-3 mb-4" />
      <SidebarContent className=" overflow-y-auto overflow-x-hidden text-xs">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="grid gap-y-3">
              <SidebarMenuItem className="-mr-3">
                <SidebarMenuButton
                  className="flex items-center gap-3
                  text-muted-foreground  
                  hover:bg-gray-100"
                  asChild
                >
                  <Link
                    href={"/"}
                    className={cn(
                      pathname === "/"
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 "
                        : "text-muted-foreground hover:bg-gray-200",
                      "mr-0"
                    )}
                  >
                    <Home />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="flex items-center gap-3
                    text-muted-foreground hover:bg-slate-100"
                    asChild
                  >
                    <Link
                      href={item.url}
                      className={cn(
                        item.url === pathname
                          ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                          : "text-muted-foreground hover:bg-gray-100"
                      )}
                    >
                      <item.icon className="size-6" />
                      {item.title}
                      <ChevronDown className="ml-auto" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[0].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild key={menuLists[0].items[0].title}>
                  <Link
                    href={menuLists[0].items[0].url}
                    className={cn(
                      menuLists[0].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <Rocket />
                    <span>{menuLists[0].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild key={menuLists[0].items[1].title}>
                  <Link
                    href={menuLists[0].items[1].url}
                    className={cn(
                      menuLists[0].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <Slack />
                    <span>{menuLists[0].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild key={menuLists[0].items[2].title}>
                  <Link
                    href={menuLists[0].items[2].url}
                    className={cn(
                      menuLists[0].items[2].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <ClipboardCheck />
                    <span>{menuLists[0].items[2].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[1].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild key={menuLists[1].items[1].title}>
                  <Link
                    href={menuLists[1].items[0].url}
                    className={cn(
                      menuLists[1].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FolderOpen />
                    <span>{menuLists[1].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild key={menuLists[1].items[0].title}>
                  <Link
                    href={menuLists[1].items[1].url}
                    className={cn(
                      menuLists[1].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <User2 />
                    <span>{menuLists[1].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[2].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[2].items[0].url}
                    className={cn(
                      menuLists[2].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <PhoneIncoming />
                    <span>{menuLists[2].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[2].items[1].url}
                    className={cn(
                      menuLists[2].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileArchive />
                    <span>{menuLists[2].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[2].items[2].url}
                    className={cn(
                      menuLists[2].items[2].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <Users2 />
                    <span>{menuLists[2].items[2].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[3].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[3].items[0].url}
                    className={cn(
                      menuLists[3].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileClock />
                    <span>{menuLists[3].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[3].items[1].url}
                    className={cn(
                      menuLists[3].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileSpreadsheet />
                    <span>{menuLists[3].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[3].items[2].url}
                    className={cn(
                      menuLists[3].items[2].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <ReceiptJapaneseYenIcon />
                    <span>{menuLists[3].items[2].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[3].items[3].url}
                    className={cn(
                      menuLists[3].items[3].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <PackageIcon />
                    <span>{menuLists[3].items[3].title}</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[3].items[4].url}
                    className={cn(
                      menuLists[3].items[4].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileSymlink />
                    <span>{menuLists[3].items[4].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[4].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[4].items[0].url}
                    className={cn(
                      menuLists[4].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileText />
                    <span>{menuLists[4].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[4].items[1].url}
                    className={cn(
                      menuLists[4].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <Speaker />
                    <span>{menuLists[4].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-base font-bold">
            {menuLists[5].label}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[5].items[0].url}
                    className={cn(
                      menuLists[5].items[0].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <FileText />
                    <span>{menuLists[5].items[0].title}</span>
                  </Link>
                </SidebarMenuButton>

                <SidebarMenuButton asChild>
                  <Link
                    href={menuLists[5].items[1].url}
                    className={cn(
                      menuLists[5].items[1].url === pathname
                        ? "text-black border-l-2 rounded-none border-l-primary bg-slate-50 hover:bg-gray-100 mr-0"
                        : "text-muted-foreground hover:bg-gray-100"
                    )}
                  >
                    <Speaker />
                    <span>{menuLists[5].items[1].title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="h-[7svh]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Activity className="bg-purple-800 text-white rounded size-6" />
              Sales
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
