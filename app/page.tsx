"use client";
import { useEffect, useState } from "react";
// import Education from "@/components/education/Education";
import Project from "@/components/project/Project";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Home() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }).toUpperCase();
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="container mx-auto max-w-4xl px-8 sm:px-12 md:px-8 relative">
        <div className="absolute left-4 sm:left-6 md:left-4 top-0 bottom-0 w-px border-l border-dashed border-gray-300 dark:border-gray-700"></div>
        <div className="2xl:mt-24 mt-16 flex gap-8 items-center flex-col">
          <div className="flex flex-col items-start w-full max-w-2xl relative">
            <div className="flex  flex-col gap-1 w-full">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-3xl 2xl:text-4xl max-w-2xl tracking-tighter text-gray-600 dark:text-gray-100 font-light">
                  Abi George
                  {/* <div className="w-full h-px my-4 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] [background-size:7px_1px]" /> */}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-green-900 font-normal text-sm italic dark:text-green-300 flex items-center space-x-2 mb-4">

                  <span>Software Engineer </span>

                </h2>

                <div className="flex items-center">
                  <a
                    href="https://github.com/abiatgit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crusor-pointer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <FaGithub />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abigeorge/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <FaLinkedin />
                    </Button>
                  </a>
             
                  <a
                    href="https://x.com/Abi_George_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <FaXTwitter />
                    </Button>
                  </a>

                  <a
                    href="https://www.youtube.com/@careoapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <FaYoutube />
                    </Button>
                  </a>

                  <ModeToggle />
                </div>
              </div>
              <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-px border-t border-dashed border-gray-300 dark:border-gray-700">
              </div>
              <p className=" text-gray-500 font-light dark:text-gray-300 mt-6">
                I&apos;m a Software Engineer and AI enthusiast based in Belfast,
                Northern Ireland. I&apos;m driven by curiosity to find magic in both
                code and life. My mission is to make a real difference in UK healthcare
                I believe AI-driven software and devices can create a huge impact in the
                lives of vulnerable people. Building the future of care homes and making
                a positive difference in millions of lives is what keeps me going.
              </p>
            </div>


            <div className="my-2 md:my-3  2xl:5">
            </div>
            <Project />

            {/* <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium  text-gray-600 dark:text-gray-400">
                Education
              </h1>
            </div>
            <Education /> */}

            <div className="flex flex-col justify-end items-start gap-3 mt-16 mb-12 2xl:my-9 w-full">
              <p className="text-gray-600 text-base dark:text-gray-200" style={{fontFamily: 'var(--font-signature)', letterSpacing: '2px'}}>
                Abi George
              </p>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  London {currentTime}
                </p>
                <Badge variant="outline" asChild>
                  <a
                    href="https://cal.com/abi.george"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Book a call
                  </a>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
