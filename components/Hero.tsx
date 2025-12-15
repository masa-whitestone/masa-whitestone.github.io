"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-neutral-950 to-neutral-950 -z-10" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Masaki
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Shiraishi
                        </span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-neutral-400 font-medium mb-6">
                        Quantum Algorithm & ML Engineer
                    </h2>
                    <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-lg">
                        Working at the intersection of quantum computing and artificial intelligence, with a focus on implementation and real-world impact.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 bg-white text-neutral-950 px-6 py-3 rounded-full font-medium hover:bg-cyan-50 transition-colors"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white border border-neutral-800 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                        >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center md:justify-end"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-neutral-800 shadow-2xl shadow-cyan-500/10">
                        <Image
                            src="/images/face.png"
                            alt="Masaki Shiraishi"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-500/20 scale-110" />
                    <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-125 opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}
