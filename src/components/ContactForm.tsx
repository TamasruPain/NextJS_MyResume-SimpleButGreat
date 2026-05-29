"use client";

import React, {useState} from "react";
import {Send} from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {


    // Form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    // Handle form submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            if (res.ok) {
                toast.success("Message sent successfully!");
                setForm({name: "", email: "", subject: "", message: ""});
            } else {
                toast.error(" Failed to send message. Try again later.");
            }
        } catch (error) {
            toast.error(" Something went wrong.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-base-200 p-5 rounded-lg xl:w-96 md:w-84 w-full lg:ml-20 xl:ml-40">
            <h1 className="text-xl font-bold">Send a Message</h1>

            {/* FORM */}
            <form className="flex flex-col gap-5 p-5" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="p-3 border border-gray-300 bg-base-100 rounded"
                    value={form.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="p-3 border border-gray-300 bg-base-100 rounded"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="p-3 border border-gray-300 bg-base-100 rounded"
                    value={form.subject}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="p-3 border border-gray-300 bg-base-100 rounded h-32"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <div className="flex justify-center gap-5">
                    <button
                        type="submit"
                        className="btn btn-neutral rounded-lg w-full hover:shadow-md shadow-amber-500 shadow-xs"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"} <Send size={16}/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
