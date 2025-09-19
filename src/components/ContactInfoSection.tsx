"use client"

import React from 'react'
import {
    LucideArrowUpRightFromSquare,
    LucideMail,
    LucideMapPin,
    LucidePhone
} from "lucide-react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

const ContactInfoSection = () => {
    const phoneNumber = "919903958424";
    const whatsappMessage = "";

    return (
        <div className={'bg-base-200 rounded-lg p-5 md:ml-5 lg:ml-6 xl:ml-20' }>
            <div className={''}>
                <h1 className={'text-xl'}>Contact Information</h1>
                <div className={'flex flex-col gap-4 mt-4'}>

                    <div className={'flex items-center gap-2'}>
                        <div className={'rounded-full bg-gray-300 p-2'}>
                            <LucideMail/>
                        </div>
                        <div>
                            <h1>Email</h1>
                            <label>tamasrupain02@gmail.com</label>
                        </div>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'rounded-full bg-gray-300 p-2'}>
                            <LucidePhone/>
                        </div>
                        <div>
                            <h1>Phone</h1>
                            <label>+91 99039 58424</label>
                        </div>
                    </div>
                    <div className={'flex items-center gap-2'}>
                        <div className={'rounded-full bg-gray-300 p-2'}>
                            <LucideMapPin/>
                        </div>
                        <div>
                            <h1>Location</h1>
                            <label>Ghatal, Paschim Medinipur, West Bengal, India</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"/>
            <div className={''}>
                <h1 className={'text-xl'}>Connect With Me</h1>
                <div className={'mt-3'}>
                    <Link className={'btn btn-soft rounded-lg mx-2 my-2'}
                          href={'https://github.com/TamasruPain'}
                          target={'_blank'}>
                        <FontAwesomeIcon icon={faGithub} size="xl"/>
                        GitHub
                    </Link>
                    <Link className={'btn btn-soft rounded-lg mx-2 my-2'}
                          href={'https://www.linkedin.com/in/tamasrupain/'}
                          target={'_blank'}>
                        <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                        LinkedIn
                    </Link>
                    <Link
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-soft rounded-lg mx-2 my-2"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
                        WhatsApp
                    </Link>
                </div>
            </div>
            <div className="divider"/>
            <div className={''}>
                <a
                    href="/TamasruPain_2025_v6.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={'btn btn-neutral rounded-lg w-full mt-2 hover:shadow-green-500 shadow-md'}>
                    Open my Resume
                    <LucideArrowUpRightFromSquare size={'18'}/>
                </a>
            </div>

        </div>
    )
}
export default ContactInfoSection
