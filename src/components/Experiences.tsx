"use client"

import {Calendar, LucideArrowUpRightFromSquare, LucideTarget, MapPin} from "lucide-react";
import {certifications} from "@/store/certifications";
import Image from "next/image";
import React from "react";

export default function Experiences() {

    return (
        <div className={'bg-gray-300 py-15'} id={'experiences'}>
            <div className={'flex flex-col justify-center items-center w-full mb-5'}>
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Experience & More
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    My professional journey and key achievements
                </p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 p-4 lg:mx-10 md:ml-10 lg:ml-35 xl:ml-60'}>
                {/* Experiences */}
                <div className={'flex flex-col gap-5'}>
                    <h1 className={'text-2xl mb-5 mt-5 text-neutral'}>
                        Professional Experience
                    </h1>
                    <div className="card bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title flex items-center justify-between">Web Development Freelancer <span className={'badge badge-soft'}>Freelance</span></h2>
                            <span className={'text-md font-bold'}>Self-Employed</span>
                            <span className={'flex items-center gap-1'}><Calendar
                                size={15}/>June 2025 - Present | <MapPin
                                size={15}/>Remote</span>
                            <ul className={'px-2'}>
                                <li className={'my-1'}>
                                    Built custom websites for small businesses and startups
                                </li>
                                <li className={'my-1'}>
                                    Managed full project lifecycle from requirements to deployment
                                </li>
                                <li className={'my-1'}>
                                    Implemented SEO best practices and responsive design principles
                                </li>
                                <li>
                                    Maintained ongoing client relationships and provided technical support
                                </li>
                            </ul>
                            <div className={'mt-2'}>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>HTML/CSS</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>JavaScript</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>React.js</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>Node.js</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>MongoDB</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>Express</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>Figma</span>
                                <span className={'badge badge-soft mx-1 my-1 p-3'}>Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className={'flex flex-col gap-5'}>
                    <h1 className={'text-2xl mb-5 mt-5 text-neutral'}>
                        Key Achievements
                    </h1>
                    {certifications.map(certification => (
                        <div className="card bg-base-100 image-full shadow-sm md:w-70 lg:w-72 xl:w-75"
                             key={certification.id}>
                            <figure>
                                <Image src={certification.image} alt={certification.title}
                                       height={100} width={300} priority={true}
                                       style={{width:'100%', height:'100%'}}
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title flex items-center justify-between">{certification.title}
                                    <span className={'badge badge-soft p-4'}>{certification.company}</span></h2>
                                <p>{certification.description}</p>
                                <div className="card-actions justify-end">
                                    <a
                                        href={certification.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={'btn btn-neutral rounded-lg mt-2 hover:shadow-sky-500 shadow-md'}>
                                        View
                                        <LucideArrowUpRightFromSquare size={'18'}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div
                        className="card md:w-70 lg:w-72 xl:w-75 md:h-[50%] lg:h-[88%] xl:h-[96%] bg-base-100">
                        <div className="card-body items-center justify-center text-center">
                            <h2 className="card-title"><LucideTarget/> Looking for</h2>
                            <p className={''}>
                                Full-time opportunities in web development where I can grow and contribute to
                                innovative
                                projects.
                            </p>
                            <span className={'badge badge-soft p-3 mt-2'}>Available Immediately</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}