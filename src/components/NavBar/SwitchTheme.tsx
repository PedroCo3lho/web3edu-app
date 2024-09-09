"use client";

import React from "react";

export default function SwitchTheme() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const savedIsDark = JSON.parse(localStorage.getItem("isdark")!);
    if (savedIsDark === true) {
      console.log(savedIsDark);
      setIsDark(JSON.parse(savedIsDark));
      document
        .querySelector("html")!
        .setAttribute("data-theme", "web3edu-dark");
    } else {
      document.querySelector("html")!.setAttribute("data-theme", "web3edu");
      console.log(savedIsDark);
    }
  }, []);

  function toggleTheme() {
    if (isDark) {
      setIsDark(false);
      document.querySelector("html")!.setAttribute("data-theme", "web3edu");
      localStorage.setItem("isdark", JSON.stringify(false));
    } else {
      setIsDark(true);
      document
        .querySelector("html")!
        .setAttribute("data-theme", "web3edu-dark");
      localStorage.setItem("isdark", JSON.stringify(true));
    }
  }

  return (
    <label className="flex cursor-pointer gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
        value="synthwave"
        className="toggle theme-controller"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
}