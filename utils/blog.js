import Image from "next/image";
import No_Image from "./no_image.jpg";

export function render_image(blog, size_key) {
  const featuredMedia = blog._embedded["wp:featuredmedia"];
  if (featuredMedia && featuredMedia.length > 0) {
    // 'wp:featuredmedia' key exists and is an array with at least one element
    // You can access featuredMedia[0] here
    return (
      <>
        <Image
          src={
            blog._embedded["wp:featuredmedia"][0]?.media_details.sizes[size_key]
              .source_url
          }
          alt={blog.title.rendered}
          className=""
          width={
            blog._embedded["wp:featuredmedia"][0].media_details.sizes[size_key]
              .width
          }
          height={
            blog._embedded["wp:featuredmedia"][0].media_details.sizes[size_key]
              .height
          }
        />
      </>
    );
  } else {
    return size_key === "thumbnail" ? (
      <Image
        src={No_Image}
        alt={blog.title.rendered}
        className=""
        width={300}
        height={300}
      />
    ) : null;
  }
}
