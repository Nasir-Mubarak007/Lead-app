import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
  Stars,
  Trash2,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Chartz } from "@/components/Chartz";
import { LeadInfo } from "@/components/LeadInfo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

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
                    <PopoverTrigger>
                      <Card className="w-full">
                        <CardHeader className="flex items-center flex-row gap-x-3 -mb-3">
                          <div className="relative size-fit rounded-full p-0">
                            <Avatar>
                              <AvatarImage src={"@/public/Copilot_Icon.svg"} />
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
                            <p className="text-sm font-semibold text-left">
                              Jane Reyes
                            </p>
                            <p className="flex items-center text-muted-foreground text-xs">
                              COO . Northwind Traders
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-primary/20 rounded-lg relative p-3">
                            <div className="flex gap-3 mb-3 font-semibold items-center text-sm">
                              <MailQuestion /> Engage with Jane Reyes
                            </div>
                            <p className="text-muted-foreground text-sm text-left">
                              Jane maybe interested in expresso machines for her
                              in-store coffe shops.
                            </p>

                            <span className="bg-white p-2 absolute -top-3 -right-3 rounded-xl">
                              <Stars fill="blue" className="text-primary" />
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="-mt-3">
                          <p className="text-muted-foreground text-xs ml-2">
                            Expand business . High buying intent
                          </p>
                        </CardFooter>
                      </Card>
                    </PopoverTrigger>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    <PopoverTrigger>
                      <Card className="w-full">
                        <CardHeader className="flex items-center flex-row gap-x-3 -mb-3">
                          <div className="relative size-fit rounded-full p-0">
                            <Avatar>
                              <AvatarImage src={"@/public/Copilot_Icon.svg"} />
                              <AvatarFallback className="bg-primary text-white">
                                AM
                              </AvatarFallback>
                            </Avatar>
                            <span
                              className={cn(
                                `absolute size-3 bottom-0 right-0 bg-green-500 rounded-full`
                              )}
                            ></span>
                          </div>

                          <div className="flex flex-col">
                            <p className="text-sm font-semibold text-left">
                              Allan Monger
                            </p>
                            <p className="flex items-center text-muted-foreground text-xs">
                              Head of Real Estate Development . Contoso Coffee
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-primary/20 rounded-lg relative p-3">
                            <div className="flex gap-3 mb-3 font-semibold items-center text-sm">
                              <CalendarDays /> Prepare for meeting with Allan
                            </div>
                            <p className="text-muted-foreground text-sm text-left">
                              Prepare for high-buying intent meeting Copilot
                              scheduled for 2PM regarding upgrading service
                              contract.
                            </p>

                            <span className="bg-white p-2 absolute -top-3 -right-3 rounded-xl">
                              <Stars fill="blue" className="text-primary" />
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="-mt-3">
                          <p className="text-muted-foreground text-xs ml-2">
                            Upcoming meeting . Due today
                          </p>
                        </CardFooter>
                      </Card>
                    </PopoverTrigger>
                  </CarouselItem>
                  <CarouselItem className="md:basis-1/2">
                    <PopoverTrigger>
                      <Card className="w-full">
                        <CardHeader className="flex items-center flex-row gap-x-3 -mb-3">
                          <div className="relative size-fit rounded-full p-0">
                            <Avatar>
                              <AvatarImage src={"@/public/Copilot_Icon.svg"} />
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
                            <p className="text-sm font-semibold text-left">
                              Jane Reyes
                            </p>
                            <p className="flex items-center text-muted-foreground text-xs">
                              COO . Northwind Traders
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-primary/20 rounded-lg relative p-3">
                            <div className="flex gap-3 mb-3 font-semibold items-center text-sm">
                              <MailQuestion /> Engage with Jane Reyes
                            </div>
                            <p className="text-muted-foreground text-sm text-left">
                              Jane maybe interested in expresso machines for her
                              in-store coffe shops.
                            </p>

                            <span className="bg-white p-2 absolute -top-3 -right-3 rounded-xl">
                              <Stars fill="blue" className="text-primary" />
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="-mt-3">
                          <p className="text-muted-foreground text-xs ml-2">
                            Expand bussiness . High buying intent
                          </p>
                        </CardFooter>
                      </Card>
                    </PopoverTrigger>
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
                <Card className="w-[26rem]">
                  <CardHeader className="flex items-center flex-row gap-x-3 -my-3 -mt-4  -mx-3">
                    <div className="relative size-fit rounded-full p-0">
                      <Avatar>
                        <AvatarImage src={"@/public/Copilot_Icon.svg"} />
                        <AvatarFallback className="bg-primary text-white">
                          BO
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          `absolute size-3 bottom-0 right-0 bg-yellow-500 rounded-full`
                        )}
                      ></span>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-left">
                        Cafe A100 for woodland Bank
                      </p>
                      <p className="flex items-center text-muted-foreground text-xs">
                        Woodland Bank . $250,000 . 8 days to close
                      </p>
                    </div>
                  </CardHeader>{" "}
                  <CardContent className="flex  -mx-3 -mb-4 w-full -mr-5">
                    <div className="bg-primary/10  p-2 flex flex-1">
                      <div className="flex gap-3 font-semibold items-center text-sm">
                        <MailWarning /> Review draft and reply to Chris Naido
                      </div>
                    </div>
                    <span className="bg-white p-2  -mt-3">
                      <Stars fill="blue" className="text-primary" />
                    </span>
                  </CardContent>
                </Card>

                <Card className="w-[26rem]">
                  <CardHeader className="flex items-center flex-row gap-x-3 -my-3 -mt-4  -mx-3">
                    <div className="relative size-fit rounded-full p-0">
                      <Avatar>
                        <AvatarImage src={"@/public/Copilot_Icon.svg"} />
                        <AvatarFallback className="bg-primary text-white">
                          BO
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={cn(
                          `absolute size-3 bottom-0 right-0 bg-yellow-500 rounded-full`
                        )}
                      ></span>
                    </div>

                    <div className="flex flex-col">
                      <p className="text-sm font-semibold text-left">
                        Cafe A100 for woodland Bank
                      </p>
                      <p className="flex items-center text-muted-foreground text-xs">
                        Woodland Bank . $250,000 . 8 days to close
                      </p>
                    </div>
                  </CardHeader>{" "}
                  <CardContent className="flex  -mx-3 -mb-4 w-full -mr-5">
                    <div className="bg-primary/10  p-2 flex flex-1">
                      <div className="flex gap-3 font-semibold items-center text-sm">
                        <MailWarning /> Review draft and reply to Chris Naido
                      </div>
                    </div>
                    <span className="bg-white p-2  -mt-3">
                      <Stars fill="blue" className="text-primary" />
                    </span>
                  </CardContent>
                </Card>
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
