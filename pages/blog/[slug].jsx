/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import { render_image } from "../../utils/blog";
import "./BlogDetail.module.css";
const BlogDetail = ({ blog }) => {
  return (
    <>
      <Breadcrumbs pageTitle={blog.title.rendered} isBlog={true} />
      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">
        <div className="card my-1 shadow-xl">
          <div className="card-body">
            {render_image(blog, "full")}

            <article
              dangerouslySetInnerHTML={{
                __html: blog.content.rendered,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  try {
    const slug = context.query.slug;
    const res = await fetch(
      `https://nilkinpakistan.com/index.php/wp-json/wp/v2/posts?_embed&slug=${slug}`
    );
    const blog = await res.json();
    return {
      props: {
        blog: blog[0],
      },
    };
    s;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blog: {},
      },
    };
  }
}
export default BlogDetail;
