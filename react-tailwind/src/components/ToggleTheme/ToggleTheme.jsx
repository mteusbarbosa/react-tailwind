import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

export default function ToggleTheme() {
  //Supporting system preference and manual selection
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark"
  ).matches;
  const pageClasses = document.documentElement.classList;

  useEffect(() => {
    systemPreference && pageClasses.add("dark");
  });

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="hidden sm:block">
      <MoonIcon
        className="h-8 text-gray-100 block dark:hidden cursor-pointer"
        onClick={toggle}
      ></MoonIcon>
      <SunIcon
        className="h-8 text-gray-100 hidden dark:block cursor-pointer"
        onClick={toggle}
      ></SunIcon>
    </div>
  );
}
