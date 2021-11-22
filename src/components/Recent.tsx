import React, { ReactElement } from "react";
import { INews } from "../schemas/Type";

interface Props {
    newsData:INews
}

export default function Recent({newsData}: Props): ReactElement {
  return (
    <>
      <div className="mt-10">
        <h2 className="font-light text-xl mb-5 text-gray-900 text-center">
          Recent Posts
        </h2>
        <ul>
          <li className="mb-3">
            <div className="flex">
              <div className="w-1/3">
                <img className="rounded" src="" alt="" />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="text-gray-900 font-thin font-serif mb-2">
                  recent post
                </h3>
                <span className="text-xs text-gray-800 font-thin block mb-5">
                  November 22, 2021
                </span>
              </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex">
              <div className="w-1/3">
                <img className="rounded" src="" alt="" />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="text-gray-900 font-thin font-serif mb-2">
                  recent post
                </h3>
                <span className="text-xs text-gray-800 font-thin block mb-5">
                  November 22, 2021
                </span>
              </div>
            </div>
          </li>
          <li className="mb-3">
            <div className="flex">
              <div className="w-1/3">
                <img className="rounded" src="" alt="" />
              </div>
              <div className="w-2/3 p-2">
                <h3 className="text-gray-900 font-thin font-serif mb-2">
                  Recent post
                </h3>
                <span className="text-xs text-gray-800 font-thin block mb-5">
                  November 22, 2021
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
