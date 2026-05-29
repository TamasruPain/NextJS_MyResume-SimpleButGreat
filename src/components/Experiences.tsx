"use client"

import React from "react";
import FreelancingExperience from "@/components/experiences/Freelancing-Experience";
import PatronusautoExperience from "./experiences/Patronus-Experience";
import { LucideTarget } from "lucide-react";
import Certifications from "./Certifications";
import { motion } from "framer-motion";

export default function Experiences() {

    return (
        <div className={'bg-gray-300 py-15'} id={'experiences'}>
            {/* Header animates from top on scroll */}
            <motion.div
                className={'flex flex-col justify-center items-center w-full mb-5'}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Experience & More
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    My professional journey and key achievements
                </p>
            </motion.div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 p-4 lg:mx-10 md:ml-10 lg:ml-35 xl:ml-60'}>
                {/* Experiences - Slides in from left */}
                <motion.div
                    className={'flex flex-col gap-5'}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                >
                    <h1 className={'text-2xl mb-5 mt-5 text-neutral'}>
                        Professional Experience
                    </h1>
                    <PatronusautoExperience/>
                    <FreelancingExperience/>
                </motion.div>

                {/* Certifications - Slides in from right */}
                <motion.div
                    className={'flex flex-col gap-5'}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                >
                    <h1 className={'text-2xl mb-5 mt-5 text-neutral'}>
                        Key Achievements
                    </h1>
                   <Certifications/>

                    <div
                        className="card md:w-70 lg:w-72 xl:w-75 md:h-[50%] lg:h-[88%] xl:h-[96%] bg-base-100">
                        <div className="card-body items-center justify-center text-center">
                            <h2 className="card-title"><LucideTarget/> Looking for</h2>
                            <p className={''}>
                                Full-time opportunities in web development where I can grow and contribute to
                                innovative
                                projects.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}