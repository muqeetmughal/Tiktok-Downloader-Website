import Link from "next/link";
import React from "react";

const Error404 = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-red-600">
              404 | OOPS! PAGE NOT FOUND.
            </h1>
            <p className="py-6">
              It looks like we missed something, or you entered the wrong URL in
              the address bar.
            </p>
            <Link href={"/"} className="btn bg-purple-600 text-purple-50">
              Return to main page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
