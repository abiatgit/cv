import React from "react";
import { Badge } from "../ui/badge";

const Project = () => {
  return (
    <div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600">CareMatters</p>

          <div className="w-px h-3 bg-gray-300" />
          <p className="text-sm font-bold text-gray-600">
            {" "}
            CareHome Management App
          </p>
          <Badge  className="bg-rose-100 text-rose-600 hover:bg-rose-300 px-2 py-0.5 text-xs rounded-md">
            <a href="/" target="_blank" rel="noopener noreferrer">
             beta
            </a>
          </Badge>
        </div>

        <p className="text-sm text-gray-500 font-light italic">
          Next Js , Typescript , Prisma , Supabase , Tailwind CSS , Auth.js ,
          Shad cn , Zustand
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600">taskify</p>

          <div className="w-px h-3 bg-gray-300"/>
          <p className="text-sm font-bold text-gray-600">
            {" "}
            Trello-like Project Management app
          </p>
          <Badge  className="bg-emerald-100 text-emerald-600 hover:bg-emerald-300 px-2 py-0.5 text-xs rounded-md">
            <a
              href="https://taskify-wine-gamma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live
            </a>
          </Badge>
        </div>
        <p className="text-sm text-gray-500 font-light italic">
          Next Js , Typescript , Tailwind CSS , Clerk , Prisma , Stripe , MySQL
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600">get ƪooped</p>

          <div className="w-px h-3 bg-gray-300" />
          <p className="text-sm font-bold text-gray-600">
            {" "}
            Youtube video looping App
          </p>
       <Badge  className="bg-emerald-100 text-emerald-600 hover:bg-emerald-300 px-2 py-0.5 text-xs rounded-md">
            <a
              href="https://youloop-fawn.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              live
            </a>
          </Badge>
        </div>
        <p className="text-sm text-gray-500 font-light italic">
          Next Js , Typescript , Tailwind CSS
        </p>
      </div>
    </div>
  );
};

export default Project;
