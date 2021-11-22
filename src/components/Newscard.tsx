import React, { ReactElement } from "react";
import "../App.css";

interface Props {
  item: any;
}

function Newscard({ item }: Props): ReactElement {
  return (
    <div className="flex flex-wrap overflow-hidden justify-center h-280 pt-10 items-baseline  	">
      <div className="w-1/3 overflow-hidden lg:w-1/3 xl:w-4/6 shadow-md border border-gray-200 p-4">
        <div className="mr-2 md:mr-4 ml-2">
          <div className="pb-10">
            <div className=" overflow-hidden pl-2">
              <div>
                <img
                  className="w-full h-auto rounded"
                  src={item.urlToImage}
                  alt=""
                />
                <h2 className=" text-gray-900 font-thin font-serif text-xl my-5 text-left h-40">
                  {item.title}
                </h2>
                <p>{item.publishedAt}</p>
                <p>{item.author}</p>

                <p className="text-gray-900 font-thin tracking-wider leading-loose text-left">
                  {item.content.slice(0, 200)}...
                </p>
         
                <p className="inline-block pt-5 text-sm font-medium tracking-wider">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Newscard;
