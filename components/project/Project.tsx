import React from "react";
import { Badge } from "../ui/badge";

const Project = () => {
  return (
    <div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">CareMatters</p>

          <div className="w-px h-3 bg-gray-300" />
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            {" "}
            CareHome Management SaaS
          </p>
          <Badge  className="bg-blue-100 text-blue-600 hover:bg-blue-300 hover:text-blue-900 px-2 py-0.5 text-xs rounded-md">
            <a href="https://carematters.vercel.app/" target="_blank" rel="noopener noreferrer">
             Beta
            </a>
          </Badge>
        </div>

        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          Next Js , Typescript , Prisma , Supabase , Tailwind CSS , Auth.js ,
          Shad cn , Zustand
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">Taskify</p>

          <div className="w-px h-3 bg-gray-300"/>
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            {" "}
            Trello-like Project Management App
          </p>
          <Badge  className="bg-emerald-100 text-emerald-600 hover:bg-emerald-300 hover:text-emerald-900 px-2 py-0.5 text-xs rounded-md">
            <a
              href="https://taskify-wine-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </Badge>
        </div>
        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          Next Js , Typescript , Tailwind CSS , Clerk , Prisma , Stripe , MySQL
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">Get ƪooped</p>

          <div className="w-px h-3 bg-gray-300" />
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            {" "}
            Youtube video looping App
          </p>
       <Badge  className="bg-emerald-100 text-emerald-600 hover:bg-emerald-300 px-2 py-0.5 hover:text-emerald-900  text-xs rounded-md">
            <a
              href="https://youloop-fawn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live
            </a>
          </Badge>
        </div>
        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          Next Js , Typescript , Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Project;
