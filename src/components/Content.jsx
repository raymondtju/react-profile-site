import React from "react";
import profile from "../assets/people.png";
import mail from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";

export default function Content() {
  return (
    <main className="text-white text-center">
      <img src={profile} alt="" className="w-full" />
      <h1 className="font-bold text-3xl mt-5">Laura Smith</h1>
      <p className="text-orange-300 tracking-wide font-extralight">
        Frontend Developer
      </p>
      <a
        className="text-xs hover:underline-offset-2 hover:underline font-extralight"
        href="laurasmith.website"
      >
        laurasmith.website
      </a>

      <div className="mx-8 my-10">
        <div className="mt-5 flex justify-center space-x-2">
          <a
            href="#"
            className="bg-slate-100 text-neutral-600 py-2 px-5 rounded-md flex flex-1 justify-center hover:text-slate-100 hover:bg-neutral-500 transition duration-300 ease-in-out"
          >
            <img
              src={mail}
              alt=""
              className="w-4 mr-2 align-middle text-black font-black"
            />
            <span className="font-bold">Email</span>
          </a>
          <a
            href="#"
            className="bg-sky-500 py-2 px-5 rounded-md flex flex-1 text-center justify-center hover:text-sky-500 hover:bg-inherit transition duration-300 ease-in-out"
          >
            <img
              src={linkedin}
              alt=""
              className="w-4 mr-2 align-middle text-black"
            />
            <span className="font-bold">Linkedin</span>
          </a>
        </div>
        <div className="text-left mt-10 font-light text-sm">
          <h4 className="font-extrabold text-xl tracking-tight">About</h4>
          <p className="text-indigo-100 leading-5">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="text-left mt-4 font-light text-sm">
          <h4 className="font-extrabold text-xl tracking-tight">Interest</h4>
          <p className="text-indigo-100 leading-5">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </div>
    </main>
  );
}
