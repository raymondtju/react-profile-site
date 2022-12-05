import React from "react";
import reactLogo from "../assets/react.svg";

export default function Footer() {
  return (
    <footer className="items-center p-5 bg-[#47474b] text-neutral-200">
      <div className="flex justify-center">
        <img
          src="https://img.icons8.com/ios-filled/50/null/twitter-squared.png"
          className="flex-justify-center"
        />
        <img src="https://img.icons8.com/ios-filled/50/null/facebook--v1.png"/>
        <img src="https://img.icons8.com/ios-filled/50/null/instagram-new--v1.png"/>
        {/* <img src="https://img.icons8.com/ios-filled/50/null/reddit--v1.png" className="bg-slate-200 rounded-sm"/> */}
      </div>
    </footer>
  );
}
