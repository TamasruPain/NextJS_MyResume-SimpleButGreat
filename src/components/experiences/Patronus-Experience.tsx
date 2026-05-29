"use client"

import {Calendar, MapPin} from "lucide-react";
import React from "react";

export default function PatronusautoExperience() {

    return (
        <div className="card bg-base-100">
            <div className="card-body">
                <h2 className="card-title flex items-center justify-between">Full Stack Software Developer<span
                    className={'badge badge-soft'}>Software Developer</span></h2>
                <a href={'https://www.patronusauto.com/'} target={'_blank'} rel={'noreferrer'}
                    className={'badge text-md font-bold badge-outline p-4 mt-2 hover:shadow-blue-600 shadow-md hover:scale-102 transition-all'}>
                    Patronus Auto Pvt Ltd
                </a>
                <span className={'flex items-center gap-1'}>
                    <Calendar size={15}/>
                        1st Nov 2025 - 30th April 2026 |
                        <MapPin size={15}/>
                        Siliguri
                    </span>
                <p className={'my-3 mx-1'}>
                    Developed and maintained web applications and mobile applications for automotive intelligence solutions, enhancing user
                    experience and functionality.
                </p>
                <div className={'mt-2'}>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>Figma</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>React.js</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>Next.js</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>React Native( Expo )</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>Zustand</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>Node.js</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>Express</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>MongoDB</span>
                    <span className={'badge badge-soft mx-1 my-1 p-3'}>MySQL</span>

                </div>
            </div>
        </div>

    );
}