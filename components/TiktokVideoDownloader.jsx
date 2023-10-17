/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import i18n from "../i18";
import { CONTEXT } from "../constants/variables";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton";
const TiktokVideoDownloader = () => {
  const [videoURL, setVideoURL] = useState(
    "https://www.tiktok.com/@ubed_sk007/video/7274366546275732741"
  );

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
    video_mutation
      .mutateAsync({
        url: videoURL,
      })
      .then((resp) => {
        console.log("Output", resp);
      });
  }
  console.log("Check", videoData);

  return (
    <>
      <section>
        <div className="hero relative bg-gradient-to-b from-purple-600 to-pink-500 p-10">
          <div className="hero-content text-center ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white">
                {CONTEXT.MAIN_KEYWORD}
              </h1>

              <p className="py-6 text-white">
                TikTok video downloader tool helping you download TikTok video
                without watermark
              </p>

              {video_mutation.isSuccess ? (
                <>
                  <div className="hero bg-base-200 mt-6 shadow-2xl">
                    <div className="hero-content flex-col lg:flex-row">
                      <img
                        src={videoData.author.avatar_thumb.url_list[0]}
                        className="max-w-sm rounded-lg shadow-2xl"
                      />
                      <div className="flex flex-col text-justify">
                        <h2 className="flex lg:justify-start justify-center font-bold">
                          {videoData.author.nickname}
                        </h2>
                        <p className="lg:w-52 font-light">{videoData.desc}</p>
                      </div>
                      <div className="flex flex-col justify-items-start">
                        <button
                          className="btn btn-info mb-3"
                          // onClick={handleDownload}
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
                        </button>
                        <button
                          className="btn btn-info"
                          // onClick={handleDownload}
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
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {video_mutation.isLoading ? (
                    <LoadingSkeleton />
                  ) : (
                    <>
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
                            onClick={() => {}}
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
                            <div className="hidden sm:block">
                              {i18n.t("paste")}
                            </div>
                          </button>
                          <button
                            className="btn btn-info gap-2"
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

                            <div className="hidden sm:block">
                              {i18n.t("download")}
                            </div>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {/* <div id="splash">
         
        </div> */}
      </section>
    </>
  );
};

export default TiktokVideoDownloader;
