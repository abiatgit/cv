import React from "react";
import { Badge } from "../ui/badge";

const Project = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-400">
            CareMatters
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <p className=" font-medium text-gray-500 dark:text-gray-400">
            {" "}
            CareHome Management SaaS
          </p>
          <Badge className="bg-blue-100 text-blue-600 font-medium hover:bg-blue-300 hover:text-blue-900 px-2 py-0.5 text-xs rounded-md">
            <a
              href="https://carematters.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beta
            </a>
          </Badge>
        </div>

        <p className=" text-gray-500 font-light dark:text-gray-400">
          Next Js , Typescript , Prisma , Supabase , Tailwind CSS , Auth.js ,
          Shad cn , Zustand
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-400">Taskify</p>

          <div className="w-px h-3 bg-gray-300" />
          <p className=" font-medium text-gray-500 dark:text-gray-400">
            {" "}
            Trello-like Project Management App
          </p>
          <Badge className="bg-emerald-100 text-emerald-600 hover:bg-emerald-300 hover:text-emerald-900 px-2 py-0.5 text-xs font-medium rounded-md">
            <a
              href="https://taskify-wine-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </Badge>
        </div>
        <p className=" text-gray-500 font-light dark:text-gray-400">
          Next Js , Typescript , Tailwind CSS , Clerk , Prisma , Stripe , MySQL
        </p>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-400">
            Get ƪooped
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <p className=" font-medium text-gray-500 dark:text-gray-400">
            {" "}
            Youtube video looping App
          </p>
          <Badge className="bg-emerald-100 text-emerald-600 font-medium hover:bg-emerald-300 px-2 py-0.5 hover:text-emerald-900  text-xs rounded-md">
            <a
              href="https://youloop-fawn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </Badge>
        </div>
        <p className=" text-gray-500 font-light dark:text-gray-400">
          Next Js , Typescript , Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Project;
