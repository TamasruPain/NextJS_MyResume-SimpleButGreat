import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import * as React from "react";
import Footer from "../components/Footer";
import FloatingButton from "@/components/FloatingButton";
import {Toaster} from "react-hot-toast";
import SplashScreen from "@/components/SplashScreen";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tamasru Pain",
    description: "full stack developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <div className={'bg-gray-300'}>
            <SplashScreen>
                <Navbar/>
                {children}
                <Toaster position="top-right"
                         reverseOrder={false}
                         toastOptions={{
                             style: {
                                 border: "1px solid #713200",
                                 padding: "14px",
                                 color: "#713200",
                             },
                         }}
                />
                <FloatingButton/>
                <Footer/>
            </SplashScreen>
        </div>
        </body>
        </html>
    );
}
