import React from "react";
import Image from 'next/image';
import image from "./blog.jpg";

const BlogPage = () => {
  return (
    <div className="px-8 lg:px-20">
      <div className="flex flex-wrap justify-center my-5">
        <div className="w-full lg:w-1/3 card my-2 lg:my-2">
          <div className="bg-white rounded-lg shadow-md m-2">
            <div className="relative h-40 w-full">
              <Image
                src={image}
                alt="Card Image"
                layout="fill"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 1</h2>
              <p>This is the card displayed on small screens.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 card my-2 lg:my-2">
          <div className="bg-white rounded-lg shadow-md m-2">
            <div className="relative h-40 w-full">
              <Image
                src={image}
                alt="Card Image"
                layout="fill"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 2</h2>
              <p>This is the second card.</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 card my-2 lg:my-2">
          <div className="bg-white rounded-lg shadow-md m-2">
            <div className="relative h-40 w-full">
              <Image
                src={image}
                alt="Card Image"
                layout="fill"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">Card 3</h2>
              <p>This is the third card.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
