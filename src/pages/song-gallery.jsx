import React from "react";
import Image from "next/image";
import songImg from "@public/assets/projects/songGallery.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const SongGallery = () => {
  return (
    <>
      <Head>
        <title>Song Gallery</title>
        <meta
          name="description"
          content="Personal project made by John Chacpi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute"
            fill={true}
            style={{ objectFit: "cover" }}
            src={songImg}
            alt={"/"}
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] text-white">
            <h2 className="py-2 ">Song Gallery</h2>
            <h3>HTML5 | CSS3 | Vanilla JS</h3>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p className="pb-2">Project</p>
            <h2>Overview</h2>
            <p className="py-4">
              This project started as one of my first HTML projects, featuring a
              gallery of songs from my playlist. Originally, it was manually
              created with each item linking to its own page. However, after
              taking a course on asynchronism and connecting to APIs, I used a
              template to automatically populate the gallery with data from the
              API, and added regular expressions and template literals to
              redirect users to the song&apos;s Genius page. This project
              utilized HTML, CSS, and Vanilla JS.
            </p>
            <Link
              href={"https://ionuser13.github.io/Music-project/"}
              target={"_blank"}
              title={"See a live demo"}
            >
              <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 duration-100">
                Demo
              </button>
            </Link>
            <Link
              href={"https://github.com/ionuser13/Music-project"}
              target={"_blank"}
              title={"See code in GitHub"}
            >
              <button className="px-8 py-2 mt-4 hover:scale-105 duration-100">
                Code
              </button>
            </Link>
          </div>
          <div className="col-span-4 lg:col-span-1 shadow-lg shadow-gray-900 rounded-xl p-4 bg-section-background">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-[4px]">
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML5
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS3
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> JavaScript
                </p>
                <p className="py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> RapidAPI
                </p>
              </div>
            </div>
          </div>
          <Link href={"/#projects"}>
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SongGallery;
