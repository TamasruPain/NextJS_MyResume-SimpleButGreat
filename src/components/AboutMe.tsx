"use client"

import {GraduationCap, Sun, Target} from "lucide-react";

export default function AboutMe() {

    return (
        <div className={'bg-gray-300 py-25'} id={'about'}>
            <div className={'flex flex-col justify-center items-center w-full'}>
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>About me</h1>
                <p className={'mt-2 mx-6 text-gray-500'}>Get to know more about my journey and what drives me</p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 p-4 lg:mx-10'}>
                <div>
                    <div className={'card rounded-lg bg-base-200 md:mx-5'}>
                        <div className={'card-body'}>
                            <h1 className={'flex gap-1 items-center text-lg font-bold'}>
                                <Sun/> My Story
                            </h1>
                            <p className={'leading-6 my-4 '}>
                                I&#39;m a recent MCA graduate with a passion for creating innovative web
                                solutions. My journey into programming started during my college years, where I
                                discovered
                                the joy of turning ideas into functional applications.
                                <br/>
                                <br/>
                                I specialize in modern technologies and love working on both frontend and backend
                                development also working on my android development skills. I&#39;m always eager to learn
                                new technologies and solve complex problems
                                through code.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-4'}>
                    {/*Box-1*/}
                    <div className={'card rounded-lg bg-base-200'}>
                        <h1 className={'flex gap-1 items-center font-bold text-lg mt-5 mx-5'}>
                            <GraduationCap/>Education
                        </h1>
                        <div className={'card-body'}>
                            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
                                {/*BCA*/}
                                <div>
                                    <label className={'text-lg font-bold'}>Bachelor of Computer Application</label>
                                    <p>Techno India Institute of Technology(2019-2022)</p>
                                    <span>CGPA: 9.06/10</span>
                                </div>
                                {/*MCA*/}
                                <div>
                                    <label className={'text-lg font-bold'}>Masters of Computer Application</label>
                                    <p>Techno International New Town(2022-2024)</p>
                                    <span>CGPA: 7.68/10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Box-2*/}
                    <div className={'card rounded-lg bg-base-200'}>
                        <h1 className={'flex gap-1 items-center font-bold text-lg mt-5 mx-5'}><Target/>Current Focus</h1>
                        <div className={'card-body mb-2'}>
                                <p className={'leading-5'}>
                                    Seeking full-time opportunities in full-stack development where I can contribute to
                                    meaningful projects and continue growing as a developer.
                                </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}