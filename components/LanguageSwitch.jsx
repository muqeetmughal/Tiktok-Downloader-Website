import React from "react";
import i18n from "../i18";
import { useRouter } from "next/router";

const LanguageSwitch = () => {
    const router = useRouter()
   
  return (
    <>
      <select
        defaultValue={"en"}
        className="select select-ghost"
        onChange={(e)=>{
            // i18n.changeLanguage(e.target.value);
            const { pathname, asPath, query } = router;
            router.push({ pathname, query }, router.asPath, { locale: e.target.value });
            // i18n.changeLanguage("de")
        }}
      >
       
            <option value={"en"}>
              English
            </option>
            <option value={"de"}>
              German
            </option>
     
      </select>
    </>
  );
};

export default LanguageSwitch;
