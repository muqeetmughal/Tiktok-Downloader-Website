import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";

export default function Document() {
  return (
    <>
      <Html>
        <Head>
         
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
          <link rel="icon" href="/images/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/images/favicon.ico"></link>
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Muqeet Mughal"></meta>

          {/* <meta name="application-name" content="PWA App" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="apple-mobile-web-app-title" content="PWA App" />
                <meta name="description" content="Best PWA App in the world" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="msapplication-config" content="/icons/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#000000" />

                <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
                <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
 */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://www.ttdownloader.io" />
                <meta name="twitter:title" content="Tiktok Video Downloader" />
                <meta name="twitter:description" content="Download Tiktok videos without watermark for free" />
                {/* <meta name="twitter:image" content="https://www.ttdownloader.io/icons/android-chrome-192x192.png" /> */}
                <meta name="twitter:creator" content="@developermuqeet" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tiktok Video Downloader" />
                <meta property="og:description" content="Download Tiktok videos without watermark for free" />
                <meta property="og:site_name" content="Tiktok Video Downloader" />
                <meta property="og:url" content="https://www.ttdownloader.io" />
                {/* <meta property="og:image" content="https://www.ttdownloader.io/icons/apple-touch-icon.png" /> */}

          {/* apple splash screen images  */}
          {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
                <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
