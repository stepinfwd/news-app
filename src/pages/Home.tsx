import React, { ReactElement } from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import Newscard from "../components/Newscard";

interface Props {
  newsData: any;
}

function Home({ newsData }: Props): ReactElement {
  console.log("newsData", newsData);
  return (
    <>
      <Header />
      {/* <Recent  newsData={newsData} /> */}
      <Featured newsData={newsData} />

      <div className="">
        {newsData?.map((item: any) => (
          <Newscard item={item} />
        ))}
      </div>
    </>
  );
}

export default Home;
