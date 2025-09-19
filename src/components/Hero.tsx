"use client"

import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero bg-base-200 min-h-screen" id={'home'}>
            <div className="hero-content flex-col lg:flex-row-reverse mt-10 px-6">
                <Image src={'/ThisIsMe.jpg'} alt={'TP'} height={'300'} width={'300'} className={'rounded-full'} priority={true}/>
                <div className={''}>
                    <span className={'badge bg-gray-300 text-neutral my-2 md:mb-10'}>Available for opportunities</span>
                    <h1 className="text-5xl font-bold my-2">Full Stack Developer</h1>
                    <p className="text-lg py-6 w-[70%]">
                        Hi, I&#39;m <b>Tamasru&nbsp;Pain</b>. A passionate full stack developer who loves creating
                        modern web
                        applications
                        with clean code and beautiful user experiences.
                    </p>
                    <div className={'flex gap-6 mt-6'}>
                        <a className="btn btn-neutral rounded-lg hover:shadow-sky-500 shadow-sm" href={'#projects'}>
                            View My Work
                        </a>
                        <a className="btn btn-soft rounded-lg hover:shadow-sky-500 shadow-sm" href={'#contact'}>
                            Get in touch
                        </a>
                    </div>
                    <div className={'flex gap-20 mt-10'}>
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
                </div>
            </div>
        </div>
    )
}