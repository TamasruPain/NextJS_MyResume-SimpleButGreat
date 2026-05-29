"use client"

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {LucideMail, LucideMapPin, LucidePhone} from "lucide-react";

export default function Footer() {

    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav className={''}>
                    <h1 className="text-2xl">Tamasru&nbsp;Pain</h1>
                    <p className={'text-base-content w-[50%]'}>
                        Full Stack Developer passionate about innovative modern web applications with clean code and
                        beautiful user experiences.
                    </p>
                    <div className={'flex gap-6 md:gap-15 mt-10'}>
                        <Link href={'https://github.com/TamasruPain'} target={'_blank'}>
                            <FontAwesomeIcon icon={faGithub} size="xl"/>
                        </Link>
                        <Link href={'https://www.linkedin.com/in/tamasrupain/'} target={'_blank'}>
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                        </Link>
                        <a href={'#contact'} className="lg:tooltip" data-tip="tamasrupain02@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size="xl"/>
                        </a>
                    </div>
                </nav>
                <nav className={'flex flex-col gap-2'}>
                    <h6 className="footer-title">Quick Links</h6>
                    <a href={'#about'}>About</a>
                    <a href={'#skills'}>Skills</a>
                    <a href={'#projects'}>Projects</a>
                    <a href={'#experiences'}>Experiences</a>
                    <a href={'#contact'}>Contact Me</a>
                </nav>
                <nav className={'flex flex-col gap-4'}>
                    <h6 className="footer-title">Get In Touch</h6>
                    <a className="link link-hover flex gap-1"><LucideMail/> tamasrupain02@gmail.com</a>
                    <a className="link link-hover flex gap-1"><LucidePhone/> +91 99039 58424</a>
                    <label>Available for freelance work and full-time opportunities</label>
                </nav>
            </footer>
            <footer
                className="footer items-center justify-center bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <p>
                    @2025 Tamasru Pain. All rights reserved. | Made With ❤️ using Next.js and Tailwind CSS
                </p>
            </footer>
        </div>
    );
}