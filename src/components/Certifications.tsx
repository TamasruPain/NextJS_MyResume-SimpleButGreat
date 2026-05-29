"use client"
import {LucideArrowUpRightFromSquare, LucideTarget} from "lucide-react";
import {certifications} from "@/store/certifications";
import Image from "next/image";

const Certifications = () => {
    return (
        <div className="flex flex-col gap-4">
            {certifications.map(certification => (
                <div className="card bg-base-100 image-full shadow-sm md:w-70 lg:w-72 xl:w-75"
                    key={certification.id}>
                    <figure>
                        <Image src={certification.image} alt={certification.title}
                            height={300} width={300}
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
                                className={'btn btn-neutral rounded-lg mt-2 hover:shadow-md shadow-blue-500 shadow-xs'}>
                                View
                                <LucideArrowUpRightFromSquare size={'18'} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Certifications