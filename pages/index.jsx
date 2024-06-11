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
          content="Tiktok Video Downloader | Download Tiktok Videos without watermark for free"
        />
        <meta
          name="description"
          content="Tiktok Video Downloader is the platform to download tiktok videos without watermark for free"
        />
        <meta
          name="keywords"
          content="tiktok video downloader, tiktok downloader,tiktok without watermark downloader, tiktok no watermark"
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
