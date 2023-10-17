import React from "react";

const ContentLayout = (props) => {
  return (
    <>
      <div className="container">
        {/* <div className="w-full h-full sm:max-w-screen-md sm:mx-auto"> */}
        {props.children}
        {/* </div> */}
      </div>
    </>
  );
};
export default ContentLayout;
