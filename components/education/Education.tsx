import React from "react";

const Education = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-white">
            BBA{" Computer Science"}{" "}
          </p>

          <div className="w-px h-3 bg-gray-300" />

          <a
            href="https://annamalaiuniversity.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className=" font-medium text-gray-500 dark:text-white">
              Annamalai University
            </p>
          </a>
        </div>

        <p className=" text-gray-500 font-light dark:text-white">
          April 2010 - March 2013
        </p>
      </div>
      <div className="">
        <div className="flex gap-2  items-center">
         <p className=" font-medium text-gray-500 dark:text-white">
            Multimedia {"Diploma"}{" "}
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <a
            href="https://arenatrivandrum.com/index"
            target="_blank"
            rel="noopener noreferrer"
          >
          <p className=" font-medium text-gray-500 dark:text-white"> Arena Animation</p>
          </a>
        </div>

        <p className=" text-gray-500 font-light dark:text-white">
          Feb 2008 - March 2010
        </p>
      </div>
    </div>
  );
};

export default Education;
