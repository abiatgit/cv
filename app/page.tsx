"use client";
import Career from "@/components/career/Career";
import Education from "@/components/education/Education";
import Project from "@/components/project/Project";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto ">
        <div className={" 2xl:mt-10 mt-5 flex gap-8 items-center flex-col"}>
          <div className="flex  flex-col items-start  mx-5">
            <div className="flex  flex-col gap-1  ">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-3xl 2xl:text-4xl max-w-2xl tracking-tighter text-gray-600 dark:text-gray-400 font-light">
                  Abi George
                  {/* <div className="w-full h-px my-4 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] [background-size:7px_1px]" /> */}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-green-900 font-normal text-sm italic dark:text-green-400 flex items-center space-x-2">

                  <span>A Full-Stack Developer</span>

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
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50"
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
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50"
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
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50"
                    >
                      <FaXTwitter />
                    </Button>
                  </a>
                  <a
                    href="https://leetcode.com/u/contactabisgeorge/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50"
                    >
                  <TbBrandLeetcode />
                    </Button>
                  </a>
                  <ModeToggle />
                </div>
              </div>
              <Separator className="dark:bg-gray-500 bg-gray-200" />
              <p className=" font-medium leading-relaxed tracking-tight text-gray-500 max-w-2xl 2xl:mt-2 dark:text-gray-400">
                I&apos;m a Software Engineer , AI enthusiast Based in Belfast,
                Northern Ireland. Always curious about finding magic in both
                code and life.
              </p>
            </div>

            <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium  text-gray-600 dark:text-gray-400 ">
                Career History
              </h1>
            </div>
            <Career />

            <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium   text-gray-600 dark:text-gray-400">
                Projects
              </h1>
            </div>
            <Project />

            <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium  text-gray-600 dark:text-gray-400">
                Education
              </h1>
            </div>
            <Education />

            <div className="flex justify-end items-start gap-1 mt-5 2xl:my-9">
              <a href="mailto:info.abigeorge@gmail.com" className="text-right cursor-pointer">
                <Separator className="bg-gray-200 dark:bg-gray-500" />
                <p className="text-gray-600 text-sm font-extralight italic dark:text-gray-400">
                  info.abigeorge@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
