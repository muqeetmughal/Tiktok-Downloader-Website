import React from "react";
import i18n from "../i18";
import { CONTEXT } from "../constants/variables";

const TiktokVideoDownloader = () => {
  return (
    <>
      <section>
        <div className="hero" id="splash">
          <div className="hero-content text-center flex flex-col">
            <div className="max-w-xl text-white">
              <h1 className="text-5xl font-bold">{CONTEXT.MAIN_KEYWORD}</h1>
              <p className="py-6">
                TikTok video downloader tool helping you download TikTok video
                without watermark
              </p>
            </div>
            <div>
              <div className="form-control">
                <div className="input-group">
                  <input
                    onChange={() => {}}
                    type="text"
                    value={""}
                    placeholder="Just insert a link"
                    className="input input-bordered w-full max-w-3xl"
                  />
                  <button className="btn btn-success gap-2" onClick={() => {}}>
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
                  <button className="btn btn-info gap-2" onClick={() => {}}>
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

                    <div className="hidden sm:block">{i18n.t("download")}</div>
                  </button>
                </div>
              </div>
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
