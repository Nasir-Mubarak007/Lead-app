/* eslint-disable react/jsx-no-comment-textnodes */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Copilot from "@/public/Copilot_Icon.svg";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CalendarDays,
  ChartNetwork,
  ChevronDown,
  ClockArrowUp,
  Columns3,
  LayoutList,
  ListFilter,
  MailQuestion,
  MailWarning,
  MoreVertical,
  Plus,
  RefreshCcw,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { LeadDetail } from "@/components/LeadDetail";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Activities } from "@/components/Activities";
import { Chartz } from "@/components/Chartz";
import { LeadInfo } from "@/components/LeadInfo";

export default function LeadsPage() {
  return (
    <Popover>
      <div className="flex flex-col items-center  max-h-90vh md:p-3 gap-y-3 sm:p-4 font-[family-name:var(--font-geist-sans)] w-full bg-gray-500/20">
        <Card className="flex items-center justify-between gap-x-5 text-sm w-full p-2 ">
          <Select>
            <SelectTrigger className="w-[160px] outline-none ring-0 border-0">
              <SelectValue placeholder="My open leads" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-x-4">
            <span className="flex gap-x-2 items-center">
              <ChartNetwork className="size-5 text-primary" />
              Show Chart
            </span>

            <span className="flex gap-x-2 items-center">
              <LayoutList className="size-5 text-primary" />
              Focused View
            </span>

            <span className="flex gap-x-2 items-center">
              <Plus className="size-5 text-primary" />
              Show Chart
            </span>

            <span className="flex gap-x-2 items-center">
              <RefreshCcw className="size-5 " />
              Show Chart
            </span>

            <span className="flex gap-x-2 items-center">
              <Users fill="blue" className="size-5 text-primary" />
              Collaborate
            </span>
            <span className="flex gap-x-3 items-center">
              <Trash2 className="size-5 text-primary" />
              Delete
              <span className="border-l border-l-muted-foreground h-[60%] flex items-center -ml-1">
                <ChevronDown />
              </span>
            </span>
            <span className="flex gap-x-2 items-center">
              <MoreVertical className="size-6 " />
            </span>

            <div className="flex gap-x-2">
              <Button variant={"outline"}>
                <ClockArrowUp className="size-6 " />
                Smart data
              </Button>
              <Button variant={"outline"}>
                <ListFilter className="size-6 " />
                Edit filters
              </Button>
              <Button variant={"outline"}>
                <Columns3 className="size-6 " />
                Edit columns
              </Button>
              <Button className="p-1.5">
                <ClockArrowUp className="size-6 " />

                <span className="border-l border-l-white h-[60%] flex items-center -ml-1">
                  <ChevronDown />
                </span>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="flex flex-col gap-y-5 w-full ring ring-primary p-5 px-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-x-4 w-full">
            <div className="flex gap-x-3 items-center">
              <Image
                src={Copilot}
                alt={"Copilot"}
                className=" object-cover size-5"
                height={5}
                width={5}
              />
              <p className="text-lg font-semibold">
                Hi Mona, <span className="text-primary">68%</span> of goal
                achieved and rest can be achieved by focusing on 20 top leads.
              </p>
            </div>
            <div className="flex gap-x-4 ">
              <Chartz />
              <ChevronDown className="size-5" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-4 max-w-[63%] ">
              <p className="text-sm text-muted-foreground">
                Copilot has pinpointed 20 key leads that show strong purchase
                intent and are actively engaging. These leads need your focus.
              </p>
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full gap-3"
              >
                <CarouselContent>
                  <CarouselItem className="md:basis-1/2">
                    <LeadDetail
                      src={"@/public/Copilot_Icon.svg"}
                      text={"JR"}
                      bg={"bg-red-500"}
                      name={"Jane Reyes"}
                      title={`COO . Northwind Traders`}
                      topic="Engage with Jane Reyes"
                      message="Jane maybe interested in expresso machines for her in-store coffe shops."
                      Icon={"MailQuestion"}
                      suggestion="Expand business . High buying intent"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    <LeadDetail
                      src={"@/public/Copilot_Icon.svg"}
                      text={"AM"}
                      bg={"bg-green-500"}
                      name={"Allan Monger"}
                      title={`Head of Real Estate Development . Contoso Coffee`}
                      topic="Prepare for meeting with Allan"
                      message="Prepare for high-buying intent meeting Copilot scheduled for 2PM regarding upgrading service contract."
                      Icon={CalendarDays}
                      suggestion="Upcoming meeting . Due today"
                    />
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    <LeadDetail
                      src={"@/public/Copilot_Icon.svg"}
                      text={"JR"}
                      bg={"bg-red-500"}
                      name={"Jane Reyes"}
                      title={`COO . Northwind Traders`}
                      topic="Engage with Jane Reyes"
                      message="Jane maybe interested in expresso machines for her in-store coffe shops."
                      Icon={MailQuestion}
                      sugesstion="Expand bussiness . High buying intent"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="ml-8" />
                <CarouselNext className="mr-8" />
              </Carousel>
            </div>

            <div className="border-l border-l-muted" />

            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Other key activities.
              </p>
              <div className="flex flex-col gap-3">
                <Activities
                  src={"@/public/Copilot_Icon.svg"}
                  text={"BO"}
                  bg={"bg-yellow-500"}
                  name={"Cafe A100 for woodland Bank"}
                  topic={"Review draft and reply to Chris Naido"}
                  title={"Woodland Bank . $250,000 . 8 days to close"}
                  Icon={MailWarning}
                />
                <Activities
                  src={""}
                  text={"BO"}
                  bg={"bg-yellow-500"}
                  name={"Cafe A100 for woodland Bank"}
                  topic={"Review draft and reply to Chris Naido"}
                  title={"Woodland Bank . $250,000 . 8 days to close"}
                  Icon={MailWarning}
                />
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-3 flex flex-col gap-3 rounded-sm w-full">
          <form action="" className=" md:w-[37%] relative">
            <Input
              type="search"
              name="search"
              placeholder="Sort, filter and search with copilot"
              className="p-4  border border-primary w-full  -z-0"
            />
            <Button
              size={"icon"}
              variant={"link"}
              className="absolute right-3 top-2 size-5"
            >
              <Image
                src={Copilot}
                alt={"Copilot"}
                className=" object-contain size-5"
                height={4}
                width={4}
              />
            </Button>
          </form>

          <Table>
            <TableHeader>
              <TableHead>
                <span className="flex gap-4">
                  Name <ChevronDown />
                </span>
              </TableHead>
              <TableHead>
                <span className="flex gap-4">
                  Topic <ChevronDown />
                </span>
              </TableHead>
              <TableHead>
                <span className="flex gap-4">
                  Status reasons <ChevronDown />
                </span>
              </TableHead>
              <TableHead>
                <span className="flex gap-4">
                  Created on <ChevronDown />
                </span>
              </TableHead>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox className="mr-4 text-muted-foreground" />{" "}
                  <span className="text-primary">Winford Asher</span>{" "}
                </TableCell>
                <TableCell>Cafe A100 for commercial use</TableCell>
                <TableCell>New</TableCell>
                <TableCell>4/02/2024 12:00PM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
      <PopoverContent
        align="start"
        className="w-[60rem] mt-60 -mb-60 -ml-70 shadow-2xl mr-70 ring ring-primary"
      >
        <LeadInfo />
      </PopoverContent>
    </Popover>
  );
}
