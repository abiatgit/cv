import React from "react";

const Education = () => {
  return (
    <div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600">
            BBA{" Computer Science"}{" "}
          </p>

          <div className="w-px h-3 bg-gray-300" />
          
            <a href="https://annamalaiuniversity.ac.in/"  target="_blank" rel="noopener noreferrer">
          <p className="text-sm font-bold text-gray-600">
   
            Annamalai University
          </p>
          </a>
        </div>

        <p className="text-sm text-gray-500 font-light italic">
          April 2010 - March 2013
        </p>
      </div>
      <div className="my-2">
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold text-gray-600">
            Multimedia {"Diploma"}{" "}
          </p>

          <div className="w-px h-3 bg-gray-300" />
          <a href="https://arenatrivandrum.com/index"  target="_blank" rel="noopener noreferrer">
            <p className="text-sm font-bold text-gray-600"> Arena Animation</p>
          </a>
        </div>

        <p className="text-sm text-gray-500 font-light italic">
          Feb 2008 - March 2010
        </p>
      </div>
    </div>
  );
};

export default Education;
