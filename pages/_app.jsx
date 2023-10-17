import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";
import NextProgress from "next-progress";
import { Toaster } from "react-hot-toast";
import { themeChange } from "theme-change";
import { useEffect } from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { useRouter } from "next/router";
import i18n from "../i18";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  if (router.locale) {
    i18n.changeLanguage(router.locale);
  }

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <NextProgress delay={3000} options={{ showSpinner: true }} />

      <MainLayout>
        {/* <RecoilRoot> */}
        <GoogleAnalytics trackPageViews gaMeasurementId="G-1L2TT5D8MB" />
        <Component {...pageProps} />
        {/* </RecoilRoot> */}

        <Toaster position="bottom-center" reverseOrder={false} />
      </MainLayout>
    </>
  );
}
