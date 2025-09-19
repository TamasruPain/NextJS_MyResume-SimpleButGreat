"use client"

import ContactInfoSection from "./ContactInfoSection";
import ContactForm from "./ContactForm";

export default function GetInTouch() {

    return (
        <div className={'bg-gray-300 py-10'} id={'contact'}>
            <div className={'flex flex-col justify-center items-center w-full mb-10'}>
                <h1 className={'text-3xl mt-10 text-neutral font-bold'}>
                    Get In Touch
                </h1>
                <p className={'mt-2 mx-6 text-gray-500'}>
                    Let&#39;s discuss opportunities and bring your ideas to life
                </p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 px-4 lg:mx-10'}>
                <ContactInfoSection/>
                <ContactForm/>
            </div>
        </div>
    );
}