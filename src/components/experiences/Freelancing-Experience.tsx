"use client"

import React from "react";
import {Calendar, MapPin} from "lucide-react";

export default function FreelancingExperience() {

    return (

            <div className="card bg-base-100">
                <div className="card-body">
                    <h2 className="card-title flex items-center justify-between">Web Development Freelancer <span
                        className={'badge badge-soft'}>Freelance</span></h2>
                    <span className={'text-md font-bold'}>Self-Employed</span>
                    <span className={'flex items-center gap-1'}>
                    <Calendar
                        size={15}/>June 2025 - October 2025 |
                    <MapPin
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
    );
}