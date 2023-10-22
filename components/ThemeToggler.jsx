import React from "react";
import i18n from "../i18";

const themeValues = ["light", "dark"];
const ThemeToggler = () => {
  return (
    <>
      <select
        defaultValue={"light"}
        className="select select-ghost"
        data-choose-theme
      >
        {themeValues.map((theme_m, i) => {
          return (
            <option key={theme_m.toLowerCase()} value={theme_m}>
              {i18n.t(theme_m)}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default ThemeToggler;
