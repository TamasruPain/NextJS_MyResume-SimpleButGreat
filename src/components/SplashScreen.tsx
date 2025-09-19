// src/components/SplashScreen.tsx
"use client";
import React, {useEffect, useState} from "react";
import Image from "next/image";

export default function SplashScreen({children}: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center gap-10 h-screen bg-gray-200">
                <div className={'flex items-center justify-center gap-5'}>
                    <figure className={''}>
                        <Image src={'/ThisIsT.png'} alt={'T'} height={100} width={100} priority={true} style={{ width: '100%', height: '100%' }} />
                    </figure>
                    <h1 className="animate__animated animate__zoomInDown text-blue-600 text-6xl font-bold hidden md:block">
                        Tamasru Pain
                    </h1>
                </div>
                <span className="text-xl text-gray-500">
                    Simple But Great
                </span>
            </div>
        );
    }

    return <>{children}</>;
}
