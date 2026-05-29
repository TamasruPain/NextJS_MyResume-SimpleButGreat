"use client"

import ContactInfoSection from "./ContactInfoSection";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function GetInTouch() {

    return (
        <div className={'bg-gray-300 py-10'} id={'contact'}>
            {/* Header animates from top on scroll */}
            <motion.div
                className={'flex flex-col justify-center items-center w-full mb-10'}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Get In Touch
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    Let&#39;s discuss opportunities and bring your ideas to life
                </p>
            </motion.div>

            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 px-4 lg:mx-10 overflow-hidden'}>
                {/* Contact Info - slides in from left */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                >
                    <ContactInfoSection/>
                </motion.div>

                {/* Contact Form - slides in from right */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
                >
                    <ContactForm/>
                </motion.div>
            </div>
        </div>
    );
}