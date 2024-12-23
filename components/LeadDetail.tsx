/* eslint-disable react/jsx-no-comment-textnodes */
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Stars } from "lucide-react";
import { cn } from "@/lib/utils";
import { PopoverTrigger } from "./ui/popover";

interface AvatarProps {
  src: string;
  text: string;
  bg: string;
  name: string;
  title: string;
  message: string;
  topic: string;
  Icon: string;
  suggestion: string;
}

export function LeadDetail({
  bg,
  text,
  src,
  name,
  title,
  topic,
  message,
  Icon,
  suggestion,
}: AvatarProps) {
  return (
    <PopoverTrigger>
      <Card className="w-full">
        <CardHeader className="flex items-center flex-row gap-x-3 -mb-3">
          <div className="relative size-fit rounded-full p-0">
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback className="bg-primary text-white">
                {text}
              </AvatarFallback>
            </Avatar>
            <span
              className={cn(
                `absolute size-3 bottom-0 right-0 ${bg} rounded-full`
              )}
            ></span>
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-left">{name}</p>
            <p className="flex items-center text-muted-foreground text-xs">
              {title}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/20 rounded-lg relative p-3">
            <div className="flex gap-3 mb-3 font-semibold items-center text-sm">
              <Icon /> {topic}
            </div>
            <p className="text-muted-foreground text-sm text-left">{message}</p>

            <span className="bg-white p-2 absolute -top-3 -right-3 rounded-xl">
              <Stars fill="blue" className="text-primary" />
            </span>
          </div>
        </CardContent>
        <CardFooter className="-mt-3">
          <p className="text-muted-foreground text-xs ml-2">{suggestion}</p>
        </CardFooter>
      </Card>
    </PopoverTrigger>
  );
}
