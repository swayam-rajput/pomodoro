"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";

export default function Home() {
    return (
        <div className="h-screen mx-auto flex min-h-screen max-w-3xl flex-col justify-items-center dark:text-white text-black font-sans px-4 pb-8 sm:px-6">
            <Navbar/>
            <Timer/>        
        </div>
    );
}
