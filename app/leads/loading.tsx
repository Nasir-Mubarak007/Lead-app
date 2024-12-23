import { Loader2 } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div>
      <Loader2 className="size-7 animate-spin" />
      <h1>Loading...</h1>
    </div>
  );
}
