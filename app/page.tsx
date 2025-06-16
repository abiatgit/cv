
"use client";
import Career from "@/components/career/Career";
import Education from "@/components/education/Education";
import Project from "@/components/project/Project";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto ">
        <div className={" mt-10 flex gap-8 items-center flex-col"}>
          <div className="flex  flex-col items-start  mx-5">
            <div className="flex  flex-col gap-2  ">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-5xl max-w-2xl tracking-tighter  font-regular">
                  abi george
                  {/* <div className="w-full h-px my-4 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] [background-size:7px_1px]" /> */}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-green-900 text-sm italic dark:text-green-400">
                  A TypeScript Developer
                </h2>
                <div className="flex items-center">
                  <a
                    href="https://github.com/abiatgit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="crusor-pointer"
                  >
                    <Button variant="ghost" className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50">
                      <FaGithub />
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abigeorge/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50">
                      <FaLinkedin />
                    </Button>
                  </a>
                   <a
                    href="https://x.com/Abi_George_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  <Button variant="ghost" className="cursor-pointer text-zinc-500 hover:text-zinc-900 dark:hover:text-neutral-50">
                      <FaXTwitter/>
                    </Button>
                  </a>
                  <ModeToggle/>
                </div>
              </div>
              <Separator />
              <p className="text-sm font-normal leading-relaxed tracking-tight text-muted-foreground max-w-2xl 2xl:mt-2 dark:text-white">
                I&apos;m a Software Engineer Based in Belfast, Northern
                Ireland. Always curious about finding magic in both code and
                life.
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <div className="2xl:mt-3 ">
                <h1 className="text-lg my-3 text-gray-500 dark:text-white">Career History</h1>

                <Career />
              </div>
            </div>
             <div className="flex flex-row gap-3">
              <div className="2xl:mt-3 ">
                <h1 className="text-lg my-3 text-gray-500 dark:text-white">Projects</h1>
                <Project />
              </div>
            </div>
             <div className="2xl:mt-3 ">
              <h1 className="text-lg my-3 text-gray-500 dark:text-white">Education</h1>
              <Education />
            </div>
           

            <div className="flex items-center justify-between gap-1 2xl:mt-9 2xl:mb-21">
              <Separator className="bg-green-700" />
              <a href="mailto:info.abigeorge@gmail.com">
                <p className="text-sm text-gray-900 font-light italic dark:text-white ">
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
