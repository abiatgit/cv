
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const clickHandle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  // Prevent SSR flash - render placeholder instead of null
  if (!resolvedTheme) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="group cursor-pointer"
        disabled
      >
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-zinc-500" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={clickHandle}
      className="group cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-zinc-500 group-hover:text-black dark:group-hover:text-white" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-zinc-500 group-hover:text-black dark:group-hover:text-white" />
      )}
    </Button>
  );
}
