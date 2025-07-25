import React from "react";

const Career = () => {
  return (
    <div >
      <div className="dark:text-gray-400 ">
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            Software Engineer
          </p>

          <div className="w-px h-3 bg-gray-300 dark:text-gray-400" />
          <a
            href="https://www.fifthside.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" font-medium text-gray-500 dark:text-gray-200">
              5th Side Studio
            </p>
          </a>
        </div>
        <p className=" text-gray-500 font-light dark:text-gray-300">
          April 2024 - Present
        </p>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            Full-stack Developer{" "}
          </p>

          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <a
            href=" https://workceptive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" font-medium text-gray-500 dark:text-gray-200">
              Workceptive Pvt. Ltd.
            </p>
          </a>
        </div>
         <p className=" text-gray-600 font-light dark:text-gray-300">
          Sep 2023 - Feb 2024
        </p>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            Senior Support Worker
          </p>

          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />
          <a
            href="https://www.glencraig.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" font-medium text-gray-500 dark:text-gray-200">
              Camphill Community
            </p>
          </a>
        </div>

       <p className=" text-gray-500 font-light dark:text-gray-400">
          Jan 2019 - June 2022
        </p>
      </div>
      <div className="">
        <div className="flex gap-2 items-center">
          <p className=" font-medium text-gray-500 dark:text-gray-200">
            Web Designer
          </p>

          <div className="w-px h-3 bg-gray-300 dark:bg-gray-600" />

          <a
            href=" https://www.planetmedia.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className=" font-medium text-gray-500 dark:text-gray-200">
              Planet Media
            </p>
          </a>
        </div>

       
       <p className=" text-gray-500 font-light dark:text-gray-400">
          June 2013 - Sep 2018
        </p>
      </div>
    </div>
  );
};

export default Career;
