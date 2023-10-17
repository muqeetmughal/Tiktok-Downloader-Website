import Head from "next/head";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import i18n from "../i18";
import TiktokVideoDownloader from "../components/TiktokVideoDownloader";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Tiktok Downloader | Download Tiktok Videos without watermark
        </title>

        <link rel="canonical" href="https://ttdownloader.io/" />
        <meta
          name="title"
          content="Free Password Generator | Online Random Password Generator Website"
        />
        <meta
          name="description"
          content="Free Password Generator is an online tool to generate random passwords of your choice in numbers, uppercase, lowercase, and symbol combinations."
        />
        <meta
          name="keywords"
          content="free password generator, password generator, strong password generator, secure password generator, password generator online, pwd generator, "
        />
        {/* <meta name="robots" content="index, follow, max-image-preview:large" /> */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Muqeet Mughal"></meta>
      </Head>

      <TiktokVideoDownloader />

      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">
        <Content />
      </div>
    </>
  );
};

export default Home;
