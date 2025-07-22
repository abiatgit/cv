"use client";
import Career from "@/components/career/Career";
// import Education from "@/components/education/Education";
import Project from "@/components/project/Project";
import { ModeToggle } from "@/components/toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="container mx-auto max-w-4xl px-6 sm:px-8 md:px-4">
        <div className="2xl:mt-24 mt-16 flex gap-8 items-center flex-col">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <div className="flex  flex-col gap-1  ">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl md:text-3xl 2xl:text-4xl max-w-2xl tracking-tighter text-gray-600 dark:text-gray-100 font-light">
                  Abi George
                  {/* <div className="w-full h-px my-4 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] [background-size:7px_1px]" /> */}
                </h1>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-green-900 font-normal text-sm italic dark:text-green-300 flex items-center space-x-2">

                  <span>Software Engineer</span>

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
            
                  <ModeToggle />
                </div>
              </div>
              <Separator className="dark:bg-gray-600 bg-gray-200" />
              <p className=" text-gray-500 font-light dark:text-gray-300">
                I&apos;m a Software Engineer , AI enthusiast Based in Belfast,
                Northern Ireland. Always curious about finding magic in both
                code and life.
              </p>
            </div>

            <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium  text-gray-600 dark:text-gray-100 ">
                Career History
              </h1>
            </div>
            <Career />

            <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium   text-gray-600 dark:text-gray-100">
                Project
              </h1>
            </div>
            <Project />

            {/* <div className="my-2 md:my-3  2xl:5">
              <h1 className="font-medium  text-gray-600 dark:text-gray-400">
                Education
              </h1>
            </div>
            <Education /> */}

            <div className="flex flex-col justify-end items-start gap-1 mt-5 2xl:my-9">
            <p className="text-gray-600 text-xl dark:text-gray-200" style={{fontFamily: '"Dancing Script", "Brush Script MT", cursive', fontWeight: 400, transform: 'rotate(-1deg)', letterSpacing: '0.5px'}}>
                  Abi George
                </p>
              <a href="mailto:info.abigeorge@gmail.com" className="text-right cursor-pointer">
                <Separator className="bg-gray-200 dark:bg-gray-600" />
          
                <p className="text-gray-600 text-sm font-extralight italic dark:text-gray-200">
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
