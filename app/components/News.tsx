import React from "react";

const News = ({
  uuid,
  title,
  description,
  snippet,
  url,
  image_url,
  published_at,
}: any) => {
  return (
    <div className="border-2 w-96 shadow-lg shadow-gray-500 rounded-md  p-4">
      <div key={uuid}>
        <div className="font-bold">{title}</div>
        <div className="">{description}</div>
        {/* <div>{snippet}</div> */}
        <div>{}</div>
        <div>
          <img src={image_url} />
        </div>
        <div>{published_at}</div>
      </div>
    </div>
  );
};

export default News;
