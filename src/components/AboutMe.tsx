"use client";

import { GraduationCap, Sun, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className={"bg-gray-300 py-25"} id={"about"}>
      {/* Header section animates from top on scroll */}
      <motion.div
        className={"flex flex-col justify-center items-center w-full"}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={"text-3xl mt-10 text-neutral font-bold"}>About me</h1>
        <p className={"mt-2 mx-6 text-gray-500"}>
          Get to know more about my journey and what drives me
        </p>
      </motion.div>

      <div className={"grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 p-4 lg:mx-10"}>
        {/* Left Column: My Story / About + Skills Identity slides in from left on scroll */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        >
          <div className={"card rounded-lg bg-base-200 md:mx-5 h-full"}>
            <div className={"card-body"}>
              <h1 className={"flex gap-1 items-center text-lg font-bold"}>
                <Sun /> About + Skills Identity
              </h1>
              <p className={"leading-6 my-4 "}>
                I&#39;m a MCA graduate passionate at creating innovative web
                solutions. My journey into programming started during my
                college years, where I discovered the joy of turning ideas
                into functional applications.
                <br />
              </p>
              <div className={"mb-6"}>
                <label>
                  I am a Full Stack Developer with UI-focused frontend and
                  Android experience.
                </label>
                <ul className={"list-disc ml-4"}>
                  <li>Building internal business systems (HRMS, CRM, FMS)</li>
                  <li>Strong in React, Next.js, Node.js, REST APIs</li>
                  <li>
                    Experience designing UI in Figma and implementing
                    production-ready interfaces
                  </li>
                  <li>Currently working as Associate Software Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Education slides in from right on scroll */}
        <motion.div
          className={"flex flex-col gap-4"}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        >
          {/*Box-1*/}
          <div className={"card rounded-lg bg-base-200 h-full"}>
            <h1
              className={
                "flex gap-1 items-center font-bold text-lg mt-5 mx-5"
              }
            >
              <GraduationCap />
              Education
            </h1>
            <div className={"card-body"}>
              <div className={"grid grid-cols-1 gap-4 mx-6 mt-2 mb-6"}>
                {/*MCA*/}
                <div className={"flex items-center justify-between gap-3"}>
                  <div className={"flex flex-col gap-2"}>
                    <label className={"text-lg font-bold"}>
                      Masters of Computer Application
                    </label>
                    <p>Techno International New Town </p>
                  </div>
                  <div className={"flex flex-col gap-2 text-right"}>
                    <span className={"font-semibold"}>CGPA: 7.68/10</span>
                    <label className={"text-sm text-gray-500"}>2022 - 2024</label>
                  </div>
                </div>
                <div className={"divider"}></div>
                {/*BCA*/}
                <div className={"flex items-center justify-between gap-3"}>
                  <div className={"flex flex-col gap-2"}>
                    <label className={"text-lg font-bold"}>
                      Bachelor of Computer Application
                    </label>
                    <p>Techno India Institute of Technology</p>
                  </div>
                  <div className={"flex flex-col gap-2 text-right"}>
                    <span className={"font-semibold"}>CGPA: 9.06/10</span>
                    <label className={"text-sm text-gray-500"}>2019 - 2022</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
