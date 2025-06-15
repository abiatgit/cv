import React from "react";

const Career = () => {
  return (
    <div>
      <div className="my-2 ">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">Software Engineer</p>

          <div className="w-px h-3 bg-gray-300" />
          <a
            href="https://www.fifthside.studio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-bold text-gray-600 dark:text-white">5th Side Studio</p>
          </a>
        </div>
        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          April 2024 - Present
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Full-stack Developer{" "}
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <a
            href=" https://workceptive.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-bold text-gray-600 dark:text-white">
              Workceptive Pvt. Ltd.
            </p>
          </a>
        </div>
        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          Sep 2023 - Feb 2024
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">
            Senior Support Worker
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <a
            href="https://www.glencraig.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-bold text-gray-600 dark:text-white">
              Camphill Community
            </p>
          </a>
        </div>

        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          Jan 2019 - June 2022
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600 dark:text-white">Web Designer</p>

          <div className="w-px h-3 bg-gray-300" />

          <a
            href=" https://www.planetmedia.com.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm font-bold text-gray-600 dark:text-white">Planet Media</p>
          </a>
        </div>

        <p className="text-sm text-gray-500 font-light italic dark:text-white">
          June 2013 - Sep 2018
        </p>
      </div>
    </div>
  );
};

export default Career;
