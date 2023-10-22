/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Breadcrumbs from "../Breadcrumbs";
import { render_image } from "../../utils/blog";

const BlogPage = ({ blogs }) => {
  return (
    <>
      <Breadcrumbs
        pageTitle="Blogs"
        urls={[
          {
            title: "Home",
            url: "/",
            isActive: false,
          },
          {
            title: "Blog",
            url: "/blog",
            isActive: true,
          },
        ]}
      />
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">
        {/* <div className="card my-1 shadow-xl"> */}
        {blogs.map((blog, index) => (
          <div key={index} className="card-body">
            <Link href={`/blog/${blog.slug}`}>
              <div className="w-full card my-2 lg:my-2">
                <div className=" rounded-lg shadow-md p-2 flex">
                  <div className="image-container w-1/3">
                    {render_image(blog, "thumbnail")}
                  </div>
                  <div className="text-container w-2/3 px-3">
                    <h2 className="text-xl font-semibold">
                      {blog.title.rendered}
                    </h2>
                    <div
                      className="line-clamp-1 truncate"
                      dangerouslySetInnerHTML={{
                        __html: blog["excerpt"]["rendered"],
                      }}
                    >
                      {/* {blog.excerpt.rendered} */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* </div> */}
      </div>
    </>
  );
};

export default BlogPage;

export async function getServerSideProps() {
  try {
    // Fetch data from your API endpoint
    const res = await fetch(
      "https://nilkinpakistan.com/wp-json/wp/v2/posts?_embed"
    );

    const blogs = await res.json();

    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogs: [], // Return an empty array or handle the error as needed
      },
    };
  }
}
