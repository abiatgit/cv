import React from "react";
import { Badge } from "../ui/badge";

const Project = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            CareO
          </p>

          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            {" "}
            Care Management App
          </p>
          <Badge className="bg-blue-100 text-blue-600 font-medium hover:bg-blue-300 hover:text-blue-900 px-2 py-0.5 text-xs rounded-md">
            <a
              href="https://careo.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beta
            </a>
          </Badge>
        </div>

        <p className=" text-gray-500 font-light dark:text-gray-300">
          CareO is an AI-powered care management platform that makes running care homes easier. Cut Documenting Time by 50%. More Control. More Peace of Mind.
        </p>
      </div>
        {/* <div className="my-2">
          <div className="flex gap-2 items-center">
            <p className=" font-medium text-gray-500 dark:text-gray-200">Taskify</p>

            <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
            <p className=" font-medium text-gray-500 dark:text-gray-200">
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
          <p className=" text-gray-500 font-light dark:text-gray-300">
            Next Js , Typescript , Tailwind CSS , Clerk , Prisma , Stripe , MySQL
          </p>
        </div> */}
      {/* <div>
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            Get ƪooped
          </p>

          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <p className=" font-medium text-gray-500 dark:text-gray-200">
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
        <p className=" text-gray-500 font-light dark:text-gray-300">
          Next Js , Typescript , Tailwind CSS
        </p>
      </div> */}
    </div>
  );
};

export default Project;
