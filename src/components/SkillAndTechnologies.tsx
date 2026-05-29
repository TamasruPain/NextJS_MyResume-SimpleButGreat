"use client";

import { LucideFolder, LucideLanguages, LucidePhone, LucideToolCase, Palette, Settings, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

import {
  frontendSkills,
  backendSkills,
  toolsAndTechnologies,
  languageSkills,
  databaseSkills,
  androidSkills,
} from "@/store/skills";
import Image from "next/image";

export default function SkillAndTechnologies() {
  return (
    <div className={"bg-gray-300 py-15"} id={"skills"}>
      {/* Header animates on scroll */}
      <motion.div
        className={"flex flex-col justify-center items-center w-full mb-10"}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={"text-3xl mt-10 text-neutral font-bold"}>
          Skill & Technologies
        </h1>
        <p className={"mt-2 mx-6 text-gray-500"}>
          Technologies I work with and my proficiency levels
        </p>
      </motion.div>

      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:mx-10"
        }
      >
        {/* box-1 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <LucideLanguages/> Languages
            </h1>
            <div className={"grid grid-cols-2 px-2 mt-2 gap-5"}>
              {languageSkills.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* box-2 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <Palette /> Frontend Development
            </h1>
            <div className={"grid grid-cols-2 px-2 mt-2 gap-5"}>
              {frontendSkills.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* box-3 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <Settings /> Backend Development
            </h1>
            <div className={"grid grid-cols-2 px-2 mt-2 gap-5"}>
              {backendSkills.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* box-4 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <LucideFolder/>
                Database
            </h1>
            <div className={"grid grid-cols-2 px-2 mt-2 gap-5"}>
              {databaseSkills.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* box-5 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <Smartphone/> Mobile Development
            </h1>
            <div className={"grid grid-cols-1 px-2 mt-2 gap-5"}>
              {androidSkills.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* box-6 */}
        <motion.div
          className={"card rounded-lg bg-base-200 md:mx-5 pb-2"}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <div className={"card-body"}>
            <h1 className={"flex gap-1 items-center mb-2 font-bold"}>
              <LucideToolCase /> Tools & Technologies
            </h1>
            <div className={"grid grid-cols-2 px-2 mt-2 gap-5"}>
              {toolsAndTechnologies.map((e) => (
                <div className={"skillcard p-2.5"} key={e.id}>
                  <div className={"flex gap-2 items-center p-2"}>
                    <Image
                      src={e.iconImage}
                      alt={e.skill}
                      width={20}
                      height={20}
                    />
                    <h1>{e.skill}</h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
