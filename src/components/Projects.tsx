"use client"

import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {LucideArrowUpRightFromSquare, LucideSettings} from "lucide-react";
import {projects, Project} from "@/store/projects";
import {motion} from "framer-motion";

export default function Projects() {

    const Github_Repo = 'https://github.com/TamasruPain';


    return (
        <div className={'bg-gray-300 py-15'} id={'projects'}>
            {/* Header animates from top on scroll */}
            <motion.div
                className={'flex flex-col justify-center items-center w-full mb-10'}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Featured Projects
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    A showcase of my recent work and personal projects
                </p>
            </motion.div>

            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 p-4 lg:mx-10'}>
                {
                    projects.map((project: Project) => (
                        <motion.div
                            className="card card-side bg-base-100"
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.6, type: "spring", stiffness: 90 }}
                        >
                            <div className="flex items-center p-2">
                                <Image
                                    src={project.image}
                                    alt="image"
                                    height={600}
                                    width={600}
                                    priority={true}
                                    className="rounded-lg hidden md:block"
                                />
                            </div>
                            <div className={'relative w-full'}>
                                <span className="badge badge-soft badge-outline absolute top-1.5 right-1.5 z-10">
                                    {project.category || "web"}
                                </span>
                                <div className="card-body">
                                    <div className={'flex flex-col justify-start items-start gap-2 mt-5 mb-15'}>
                                        <h2 className="card-title">{project.project_name}</h2>
                                        <p>{project.description}</p>
                                        <div className={'flex flex-wrap gap-2'}>
                                            {project.technologies.map((technology, index) => (
                                                <span key={index}
                                                      className={'badge badge-soft'}>{technology}</span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3.5 z-10">
                                    {project.git_repo ? (
                                        <a href={project.git_repo} target={"_blank"}
                                           className="btn btn-neutral rounded-lg hover:shadow-md shadow-sky-500 shadow-xs mx-2">
                                            <FontAwesomeIcon icon={faGithub} size="lg"
                                                             className={"animate-pulse"}/>Code
                                        </a>
                                    ) : (
                                        <button
                                            className="btn btn-neutral rounded-lg hover:shadow-md shadow-sky-500 shadow-xs tooltip mx-2"
                                            data-tip="Private Repository">
                                            <FontAwesomeIcon icon={faGithub} size="lg"/>Code
                                        </button>

                                    )}

                                    {project.live_link ? (
                                        <a href={project.live_link}
                                           target={"_blank"}
                                           className="btn btn-soft rounded-lg hover:shadow-md shadow-green-500 shadow-xs">
                                            {"Live Demo"}
                                            <LucideArrowUpRightFromSquare size={15}
                                                                          className={'animate-bounce'}/>
                                        </a>
                                    ) : (
                                        <button
                                            className="btn btn-soft rounded-lg hover:shadow-md shadow-info shadow-xs"
                                        >
                                            {"Under Development"}
                                            <LucideSettings className={'animate-spin'}/>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
            {/* Button animates from bottom */}
            <motion.div
                className={'flex items-center justify-center mt-10'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <a href={Github_Repo} target={"_blank"}
                   className={'btn btn-neutral  rounded-lg hover:shadow-md shadow-amber-500 shadow-sm'}>
                    More Projects on GitHub <LucideArrowUpRightFromSquare size={18}/>
                </a>
            </motion.div>
        </div>
    );
}