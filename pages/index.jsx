import Head from "next/head";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import i18n from "../i18";
import TiktokVideoDownloader from "../components/TiktokVideoDownloader";
import { CONTEXT } from "../constants/variables";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Tiktok Downloader | Download Tiktok Videos without watermark
        </title>

        {/* <link rel="canonical" href="https://ttdownloader.io/" /> */}
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

      </Head>

      <TiktokVideoDownloader heading={CONTEXT.MAIN_KEYWORD} paragraph=" TikTok video downloader tool helping you download TikTok video without watermark"/>
     

      <div className="w-full h-full sm:max-w-screen-sm sm:mx-auto">
        <Content />
      </div>
    </>
  );
};

export default Home;
