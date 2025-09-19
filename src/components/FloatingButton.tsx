"use client"

import { LucideArrowUp } from "lucide-react";

export default function FloatingButton() {

    return (
        <div>
            <div className="fab">
                <a href={'#home'} className="btn btn-soft float-btn">
                    <LucideArrowUp />
                </a>
            </div>
        </div>
    );
}