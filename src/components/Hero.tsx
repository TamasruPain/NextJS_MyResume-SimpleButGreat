"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { LucideRocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen" id={"home"}>
      <div className="hero-content flex-col lg:flex-row-reverse mt-10 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image
            src={"/ThisIsMe.jpg"}
            alt={"TP"}
            height={"300"}
            width={"300"}
            className={"rounded-full shadow-2xl shadow-sky-500"}
            priority={true}
          />
        </motion.div>

        <div className={""}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <span
              className={
                "flex items-center gap-2 rounded-2xl w-61 bg-gray-300 text-neutral shadow-sm shadow-sky-500 px-4 py-2 my-2 md:mb-10"
              }
            >
              Available for opportunities <LucideRocket size={15} />
            </span>
          </motion.div>
          <h1 className="animate__animated animate__fadeIn text-5xl font-bold my-2">Software Developer</h1>
          <p className="animate__animated animate__fadeIn text-lg py-6 w-[70%]">
            Hi, I&#39;m <b>Tamasru&nbsp;Pain</b>. A passionate{" "}
            <b>software developer</b> who loves creating modern web applications
            with clean code and beautiful user experiences.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <div className={"flex gap-6 mt-6"}>
              <a
                className="btn btn-neutral rounded-lg hover:shadow-md shadow-sky-500 shadow-xs "
                href={"#projects"}
              >
                View My Work
              </a>
              <a
                className="btn btn-soft rounded-lg hover:shadow-md shadow-green-500 shadow-xs"
                href={"#contact"}
              >
                Get in touch
              </a>
            </div>
            <div className={"flex gap-20 mt-10"}>
              <Link href={"https://github.com/TamasruPain"} target={"_blank"}>
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/tamasrupain/"}
                target={"_blank"}
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
              </Link>
              <Link
                href={"#contact"}
                className="lg:tooltip"
                data-tip="tamasrupain02@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
