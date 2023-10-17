/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image';
import image from "./blog.jpg";
import Link from 'next/link';
const BlogPage = () => {
  return (
    <>
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">

        <div className="card my-1 shadow-xl">
          <div className="card-body">
            <h2 className="text-lg font-bold mb-4">Blogs</h2>
            <Link href={"blog/blogdetail"}>
              <div class="w-full card my-2 lg:my-2">
                <div class=" rounded-lg shadow-md p-2 flex">
                  <div class="image-container w-1/3">
                    <Image src={image} alt="Your Image" class="" />
                  </div>
                  <div class="text-container w-2/3 px-3">
                    <h2 className="text-xl font-semibold">Blog Tittle</h2>
                    <p >
                      Your text content goes here. It can be as long as you want and will cover more area than the image.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogPage