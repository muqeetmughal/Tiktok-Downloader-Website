/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import i18n from "../i18";
import { CONTEXT } from "../constants/variables";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Link from "next/link";
const TiktokVideoDownloader = (props) => {
  const router = useRouter();
  const [videoURL, setVideoURL] = useState(
    // "https://www.tiktok.com/@ubed_sk007/video/7274366546275732741"
    ""
  );
  const [downloadURL, setDownloadURL] = useState(null);
  const [downloadMode, setDownloadMode] = useState('video')
  const [downloadProgress, setDownloadProgress] = useState(0);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setVideoURL(text);
    } catch (err) {
      console.error("Failed to paste:", err);
    }
  };
  function validateTikTokURL(url) {
    var pattern =
      /https:\/\/(?:vt\.tiktok\.com|www\.tiktok\.com\/@[\w.]+\/video)\/[0-9a-zA-Z]+\/?(\?|$)/;

    // Test the URL against the pattern
    return pattern.test(url);
  }

  const handleInputChange = (e) => {
    setVideoURL(e.target.value);
  };

  const video_mutation = useMutation((data) => {
    return axios.post("/api/video", data);
  });
  //   const download_mutation = useQuery((id) => {
  //     return axios.get(`/api/ttdownload/${id}`);
  //   });
  const videoData = video_mutation?.data?.data;

  async function handleDownload() {
    if (validateTikTokURL(videoURL)) {
      // const videoId = videoURL.match(
      //   /https:\/\/(?:vt\.tiktok\.com|www\.tiktok\.com\/@[\w.]+\/video)\/[0-9a-zA-Z]+\/?(\?|$)/
      // );

      if (videoURL) {
        video_mutation.mutateAsync({
          url: videoURL,
        });
      } else {
        toast.error("Invalid Video URL");
        // setVideoURL("");
      }
    } else {
      toast.error("Invalid tiktok url");
    }
  }

  const downloading_query = useQuery(
    ["download", downloadURL, downloadMode],
    async () => {
      try {
        const response = await fetch(downloadURL);
        const datetime = Math.floor(Date.now() / 1000);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const contentDisposition = response.headers.get("content-disposition");
        const name = downloadMode ==="video" ?  `ttdownloader.io_video_${datetime}.mp4` :  `ttdownloader.io_audio_${datetime}.mp3`
        const filename = contentDisposition
          ? contentDisposition.split("filename=")[1]
          : name; // Set the desired default filename.

        const contentLength = parseInt(
          response.headers.get("content-length"),
          10
        ); // Get the total content length for progress calculation.
        const data = new Uint8Array(contentLength);

        let bytesRead = 0;

        const reader = response.body.getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break; // Finished downloading
          }
          data.set(value, bytesRead);
          bytesRead += value.length;

          if (contentLength) {
            const progress = (bytesRead / contentLength) * 100;
            setDownloadProgress(progress.toFixed(0));
          }
        }

        const type = downloadMode === "audio" ? "audio/mp3" : "video/mp4";

        const blob = new Blob([data], { type: type }); // Set the appropriate MIME type.
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.style.display = "none";
        document.body.appendChild(a);

        a.click();
        window.URL.revokeObjectURL(url); // Clean up the object URL to free up memory.
        document.body.removeChild(a);

        setDownloadURL(null); // You can set isLoading to false here
      } catch (error) {
        // Handle any errors, and you may set isLoading to false here if needed.
        console.error("Download failed:", error);
        setDownloadURL(null); // Set isLoading to false in case of an error.
      }
    },
    {
      enabled: !!downloadURL
    }
  );



  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     e.preventDefault();
  //     e.returnValue = ""; // This line is needed for some older browsers
  //   };

  //   // window.addEventListener("beforeunload", handleBeforeUnload);

  //   // return () => {
  //   //   window.removeEventListener("beforeunload", handleBeforeUnload);
  //   // };
  // }, []);

  const render_widget = () => {
    if (!videoData && video_mutation.isIdle) {
      return (
        <>
          <h1 className="text-5xl font-bold text-white">
            {props.heading}
          </h1>

          <p className="py-6 text-white">
          {props.paragraph}
          </p>

          <div className="form-control">
            <div className="input-group">
              <input
                onChange={handleInputChange}
                type="text"
                value={videoURL}
                disabled={video_mutation.isLoading}
                placeholder="Just insert a link"
                className="input input-bordered w-full "
              />
              <button
                className="btn btn-success gap-2"
                onClick={handlePaste}
                disabled={video_mutation.isLoading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
                <div className="hidden sm:block">{i18n.t("paste")}</div>
              </button>
            </div>
            <button
              className="btn gap-2 my-2 lg:mx-auto btn-primary hover:btn-neutral  text-white"
              onClick={handleDownload}
              disabled={video_mutation.isLoading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>

              {i18n.t("download")}
            </button>
          </div>
        </>
      );
    } else if (!videoData && video_mutation.isLoading) {
      return <LoadingSkeleton />;
    } else if (videoData && !downloading_query.isLoading) {
      return (
        <>
          <div
            className={`hero mt-6 shadow-2xl border-purple-400 rounded-2xl border-2 bg-[${videoData?.cover}]`}
          >
            <div className={`hero-content flex-col lg:flex-row`}>
              <img
                src={videoData.author_avatar_url}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="flex flex-col text-justify">
                <h2 className="flex lg:justify-start justify-center font-bold text-slate-900">
                  {videoData.author_name}
                </h2>
                {/* <p className="lg:w-52 text-slate-900">{videoData.desc}</p> */}
              </div>
              <div className="flex flex-col justify-items-start">
                <a
                  onClick={() => {
                    setDownloadMode('video')
                    setDownloadURL(videoData?.without_watermark_url)
                  }}
                  // target="_blank"
                  // href={`/api/download?url=${url}`}
                  // key={index}
                  className="btn btn-info mb-3"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   downloadVideo(url);
                  // }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  {/* {i18n.t("download")} */}
                  Without Watermark
                </a>
                <a
                  onClick={() => {
                    setDownloadMode('video')
                    setDownloadURL(videoData?.with_watermark_url)
                  }}
                  // target="_blank"
                  // href={`/api/download?url=${url}`}
                  // key={index}
                  className="btn btn-info mb-3"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   downloadVideo(url);
                  // }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  {/* {i18n.t("download")} */}
                  With Watermark
                </a>
                <a
                
                  onClick={() => {
                    setDownloadMode('audio')
                    setDownloadURL(videoData?.music)
                  }}
                  className="btn btn-success"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  {/* {i18n.t("download")} */}
                  Download MP3
                </a>
              </div>
            </div>
          </div>
        </>
      );
    } else if (downloading_query.isLoading) {
      return (
        <>
          <div
            className="radial-progress"
            style={{ "--value": downloadProgress }}
          >
            {downloadProgress}%
          </div>
        </>
      );
    }
  };

  return (
    <>
      <section>
        <div className="hero relative bg-gradient-to-b from-purple-600 to-pink-500 p-10">
          <div className="hero-content text-center ">
            <div className="max-w-2xl">{render_widget()}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TiktokVideoDownloader;
