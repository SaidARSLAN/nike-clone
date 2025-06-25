import React from "react";

type data = {
  title: string;
  description: string;
  price: string;
  imgUrl: string;
};

interface Slider {
  header: string;
  context: string;
  datas: data[];
}

const Slider = ({ header, context, datas }: Slider) => {
  return (
    <div>
      <div>
        <h4>{header}</h4>
        <div>
          <p>{context}</p>
          <div>
            <button>Left</button>
            <button>Right</button>
          </div>
        </div>
      </div>
      <div>
        {datas.map((data) => {
          return <div>{data.title}</div>;
        })}
      </div>
    </div>
  );
};

export default Slider;
