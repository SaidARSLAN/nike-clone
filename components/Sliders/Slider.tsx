"use client";
import Image from "next/image";
import React, { useState } from "react";

type data = {
  title: string;
  description: string;
  price: string;
  image: string;
  readMore?: boolean;
};

interface Slider {
  header: string;
  context: string;
  datas: data[];
}

const Slider = ({ header, context, datas }: Slider) => {
  const [allDatas, setAllDatas] = useState(datas);
  const handleReadMore = (idx: number, payload: boolean) => {
    debugger;
    const foundedData = datas.find((_data, dataIdx) => dataIdx === idx);
    if (!foundedData) return;
    switch (payload) {
      case true:
        if (foundedData) foundedData.readMore = payload;
        break;
      case false:
        if (foundedData) foundedData.readMore = payload;
        break;
      default:
        break;
    }

    setAllDatas([...allDatas, foundedData]);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between sticky">
        <h4 className="text-2xl mb-4">{header}</h4>
        <div className="flex gap-2 justify-center items-center mb-4">
          <p>{context}</p>
          <div>
            <button className="bg-gray-400 rounded-full w-[45px] h-[45px]">
              L
            </button>
            <button className="bg-gray-400 rounded-full w-[45px] h-[45px] ml-4">
              R
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-2  overflow-scroll">
        {allDatas.map((data, idx) => {
          return (
            <div key={data.title + idx + Math.random()}>
              <div className="w-[360px] h-[360px] relative">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-contain h-[360px] w-[360px]"
                />
              </div>
              <div className="flex flex-col mt-8">
                <p className="font-medium">{data.title.slice(0, 20)}</p>
                {!data.readMore ? (
                  <div className="h-[40px]">
                    <p className="text-xs text-gray-400">
                      {data.description.slice(0, 100)}
                      <button
                        className="text-blue-300  cursor-pointer"
                        onClick={() => handleReadMore(idx, true)}
                      >
                        ...read more
                      </button>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-xs text-gray-400">
                      {data.description}
                      <button
                        className="text-blue-300 cursor-pointer"
                        onClick={() => handleReadMore(idx, false)}
                      >
                        read less
                      </button>
                    </p>
                  </div>
                )}

                <p>${data.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
