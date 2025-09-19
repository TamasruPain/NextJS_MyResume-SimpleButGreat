"use client"

import {LucideFolder, LucideToolCase, Palette, Settings} from "lucide-react";

import {frontendSkills, backendSkills, additionalTechnologies, toolsAndTechnologies} from "@/store/skills";

export default function SkillAndTechnologies() {


    return (
        <div className={'bg-gray-300 py-15'} id={'skills'}>
            <div className={'flex flex-col justify-center items-center w-full mb-10'}>
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Skill & Technologies
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    Technologies I work with and my proficiency levels
                </p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 lg:mx-10'}>

                {/* box-1 */}
                <div className={'card rounded-lg bg-base-200 md:mx-5 pb-2'}>
                    <div className={'card-body'}>
                        <h1 className={'flex gap-1 items-center mb-2 font-bold'}>
                            <Palette/> Frontend Development
                        </h1>
                        <div className={'flex flex-col px-4 mt-2 gap-5'}>
                            {
                                frontendSkills.map((e) => (
                                    <div key={e.id}>
                                        <div className={'flex gap-1 items-center justify-between'}>
                                            <h1>{e.skill}</h1>
                                            <span>{e.skillPercentage}%</span>
                                        </div>
                                        <progress className="progress" value={e.skillPercentage} max="100"></progress>
                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>

                {/*box-2*/}
                <div className={'card rounded-lg bg-base-200 md:mx-5 pb-2'}>
                    <div className={'card-body'}>
                        <h1 className={'flex gap-1 items-center mb-2 font-bold'}>
                            <Settings/> Backend Development
                        </h1>
                        <div className={'flex flex-col px-4 mt-2 gap-5'}>
                            {
                                backendSkills.map((e) => (
                                    <div key={e.id}>
                                        <div className={'flex gap-1 items-center justify-between'}>
                                            <h1>{e.skill}</h1>
                                            <span>{e.skillPercentage}%</span>
                                        </div>
                                        <progress className="progress" value={e.skillPercentage} max="100"></progress>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* box-3 */}
                <div className={'card rounded-lg bg-base-200 md:mx-5 pb-2'}>
                    <div className={'card-body'}>
                        <h1 className={'flex gap-1 items-center mb-2 font-bold'}>
                            <LucideToolCase/> Tools & Technologies
                        </h1>
                        <div className={'flex flex-col px-4 mt-2 gap-5'}>
                            {
                                toolsAndTechnologies.map((e) => (
                                    <div key={e.id}>
                                        <div className={'flex gap-1 items-center justify-between'}>
                                            <h1>{e.skill}</h1>
                                            <span>{e.skillPercentage}%</span>
                                        </div>
                                        <progress className="progress" value={e.skillPercentage} max="100"></progress>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col items-center justify-center bg-base-200 mx-5 md:mx-20 mt-10 rounded-lg'}>
                <h1 className={'flex gap-1 items-center mt-4 font-bold'}><LucideFolder/>Additional Technologies</h1>
                <div className={'grid grid-cols-1 md:grid-cols-2 px-4 mt-2 gap-5 p-5'}>
                    {
                        additionalTechnologies.map((a) => (
                            <div key={a.id}>
                                <span className={'badge bg-gray-300 p-4 text-black'}>{a.skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}