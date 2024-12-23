import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { Stars } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ActivitiesProps {
  src: string;
  text: string;
  bg: string;
  name: string;
  title: string;
  topic: string;
  Icon: string;
}

export function Activities({
  src,
  text,
  title,
  bg,
  Icon,
  name,
  topic,
}: ActivitiesProps) {
  return (
    <Card className="w-[26rem]">
      <CardHeader className="flex items-center flex-row gap-x-3 -my-3 -mt-4  -mx-3">
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
      </CardHeader>{" "}
      <CardContent className="flex  -mx-3 -mb-4 w-full -mr-5">
        <div className="bg-primary/10  p-2 flex flex-1">
          <div className="flex gap-3 font-semibold items-center text-sm">
            <Icon /> {topic}
          </div>
        </div>
        <span className="bg-white p-2  -mt-3">
          <Stars fill="blue" className="text-primary" />
        </span>
      </CardContent>
    </Card>
  );
}
