"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const clickHandle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (

      <Button variant="ghost" size="icon" onClick={clickHandle}>
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all  dark:-rotate-90 text-white " />
        ) : (
          <Moon className="absolute h-[1.2rem] w-[1.2rem]   transition-all dark:scale-100 dark:rotate-90 text-black" />
        )}
      </Button>
 
  );
}
