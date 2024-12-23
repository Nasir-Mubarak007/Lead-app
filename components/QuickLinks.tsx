import {
  MessageSquare,
  MessagesSquare,
  Phone,
  SquareStack,
} from "lucide-react";
import React from "react";
import { DialogTrigger } from "./ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function QuickLinks() {
  return (
    <div
      className="flex flex-col gap-5 items-center p-3 border-l-2 
    border-gray-400 bg-gray-500/10 text-muted-foreground"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <DialogTrigger>
              <SquareStack
                className="size-6 text-xs cursor-pointer"
                strokeWidth={0.9}
              />
            </DialogTrigger>
          </TooltipTrigger>

          <TooltipContent>
            <p>Agent Skills</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <MessagesSquare
        className="size-6 text-xs cursor-pointer"
        strokeWidth={0.9}
      />
      <Phone className="size-6 text-xs cursor-pointer" strokeWidth={0.9} />
      <MessageSquare
        className="size-6 text-xs cursor-pointer"
        strokeWidth={0.9}
      />
    </div>
  );
}
