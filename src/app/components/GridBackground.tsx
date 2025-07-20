"use client";
import { cn } from "@/lib/utils";
import React from "react";
  
  const GridBackground = () => {
    return (

      <div
        className={cn(
          "relative inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
   
    )
  }
  
  export default GridBackground