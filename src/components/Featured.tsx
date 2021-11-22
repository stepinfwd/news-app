import React, { ReactElement } from "react";
import { INews } from "../schemas/Type";

interface Props {
  newsData: INews[];
}

function Featured({ newsData }: Props): ReactElement {
  return (
    <div className="bg-gray-100 flex">
      {newsData.slice(0, 3).map((item): any => (
        <div className=" py-10 overflow-hidden  ">
          <ul className="flex flex-wrap -mx-2 ">
            <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <div
                className="mx-2 h-80 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1637478846637-f29e8acd7cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80")`,
                }}
              >
                <div className="absolute w-full h-full bg-black z-10 opacity-50"></div>
                <div className="relative z-20 text-center p-5">
                  <span className="inline-block text-white uppercase text-xs tracking-wide">
                    {item.title}
                  </span>
                  <h2 className="text-white font-semibold font-serif text-xl my-5">
                    {item.title}
                  </h2>
                  <span className="inline-block text-xs text-white font-sans">
                    {item.publishedAt}
                  </span>
                </div>
              </div>
            </li>
            {/* ... */}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Featured;
