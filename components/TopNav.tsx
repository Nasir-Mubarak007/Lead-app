import {
  Grid,
  Lightbulb,
  MessageCircleQuestionIcon,
  Plus,
  Settings,
  UserPenIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function TopNav() {
  return (
    <div className="max-h-[95svh] bg-violet-900 text-white flex justify-between items-center p-3">
      <div className="flex  gap-x-4 ">
        <Grid fill="white" className="size-6 text-violet-900" />

        <div className="flex items-center">
          <span className="font-semibold text-sm">Dynamic 365</span>

          <div className="border mx-1 border-l-white h-[65%] -mt-1" />
          <span className="text-xs">Sales hub</span>
        </div>
      </div>

      <div className="flex gap-x-4 items-center">
        <Link href={"#"}>
          <Lightbulb className="size-5" />
        </Link>
        <Link href={"#"}>
          <Plus className="size-5" />
        </Link>
        <Link href={"#"}>
          <Settings className="size-5" />
        </Link>
        <Link href={"#"}>
          <MessageCircleQuestionIcon className="size-5" />
        </Link>
        <Link href={"#"}>
          <UserPenIcon className="size-5" />
        </Link>
        <span className="relative size-fit rounded-full p-0">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-primary">JON</AvatarFallback>
          </Avatar>
          <span className="absolute size-3 bottom-0 right-0 bg-green-500 rounded-full"></span>
        </span>
      </div>
    </div>
  );
}
