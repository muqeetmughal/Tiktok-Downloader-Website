import React from "react";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import ContentLayout from "./ContentLayout";

const MainLayout = (props) => {
  return (
    <>
      <TopNav />
      <ContentLayout>{props.children}</ContentLayout>
      <Footer />
    </>
  );
};

export default MainLayout;
