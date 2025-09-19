"use client"

import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {LucideArrowUpRightFromSquare} from "lucide-react";
import {projects, Project} from "@/store/projects";

export default function Projects() {

    const Github_Repo = 'https://github.com/TamasruPain';


    return (
        <div className={'bg-gray-300 py-15'} id={'projects'}>
            <div className={'flex flex-col justify-center items-center w-full mb-10'}>
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Featured Projects
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    A showcase of my recent work and personal projects
                </p>
            </div>

            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 lg:mx-10'}>
                {
                    projects.map((project: Project) => (
                        <div className="card card-side bg-base-100"
                             key={project.id}>
                            <figure className={'p-2'}>
                                <Image src={project.image} alt={'image'} height={200} width={200} priority={true}
                                       className={'rounded-lg hidden md:block'}
                                />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title">{project.project_name}</h2>
                                <p>{project.description}</p>
                                <div className={''}>
                                    {project.technologies.map((technology, index) => (
                                        <span key={index}
                                              className={'badge badge-soft p-3 my-1 mx-1'}>{technology}</span>
                                    ))}
                                </div>
                                <div className="card-actions mb-2 mt-1">
                                    {project.git_repo ? (
                                        <a href={project.git_repo} target={"_blank"}
                                           className="btn btn-neutral rounded-lg hover:shadow-sky-500 shadow-md">
                                            <FontAwesomeIcon icon={faGithub} size="lg"/>Code
                                        </a>
                                    ) : (
                                        <button
                                           className="btn btn-neutral rounded-lg hover:shadow-sky-500 shadow-md">
                                            <FontAwesomeIcon icon={faGithub} size="lg"/>Code
                                        </button>

                                    )}

                                    {project.live_link ? (
                                        <a href={project.live_link}
                                           target={"_blank"}
                                           className="btn btn-soft rounded-lg hover:shadow-sky-500 shadow-md">
                                            {"Live Demo"}
                                            <LucideArrowUpRightFromSquare size={15}/>
                                        </a>
                                    ) : (
                                        <button
                                            className="btn btn-soft rounded-lg hover:shadow-sky-500 shadow-md"
                                        >
                                            {"Under Development"}
                                            <LucideArrowUpRightFromSquare size={15}/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={'flex items-center justify-center mt-10'}>
                <a href={Github_Repo} target={"_blank"}
                   className={'btn btn-neutral  rounded-lg hover:shadow-sky-500 shadow-md'}>
                    More Projects on GitHub <LucideArrowUpRightFromSquare size={18}/>
                </a>
            </div>
        </div>
    );
}