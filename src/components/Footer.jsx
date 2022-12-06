import React from "react";
import reactLogo from "../assets/react.svg";

export default function Footer() {
  return (
    <div className="items-center py-2 bg-[#6e6e7a] text-neutral-200 rounded-b-2xl">
      <div className="flex justify-center">
        <img
          src="https://img.icons8.com/ios-filled/50/null/twitter-squared.png"
          className="w-8 h-8"
        />
        <img src="https://img.icons8.com/ios-filled/50/null/facebook--v1.png" className="w-8 h-8" />
        <img src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png" className="w-8 h-8" />
      </div>
    </div>
  );
}
