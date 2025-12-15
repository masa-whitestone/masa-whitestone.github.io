import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-neutral-900/30">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <p className="text-neutral-400 mb-12 max-w-xl mx-auto">
                    I'm always open to discussing new opportunities, collaborations, or just chatting about quantum computing and AI. Feel free to reach out.
                </p>

                <div className="flex justify-center gap-8 mb-12">
                    <Link href="mailto:masaki.shiraishi@fuji.waseda.jp" className="flex flex-col items-center gap-2 group">
                        <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                            <Mail size={24} />
                        </div>
                        <span className="text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors">Email</span>
                    </Link>

                    <Link href="https://www.linkedin.com/in/masaki-shiraishi/" target="_blank" className="flex flex-col items-center gap-2 group">
                        <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                            <Linkedin size={24} />
                        </div>
                        <span className="text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors">LinkedIn</span>
                    </Link>

                    <Link href="https://github.com/masa-whitestone" target="_blank" className="flex flex-col items-center gap-2 group">
                        <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                            <Github size={24} />
                        </div>
                        <span className="text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors">GitHub</span>
                    </Link>

                    <Link href="https://x.com/masawhitestone" target="_blank" className="flex flex-col items-center gap-2 group">
                        <div className="p-4 bg-neutral-900 rounded-full border border-neutral-800 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all">
                            <Twitter size={24} />
                        </div>
                        <span className="text-sm text-neutral-500 group-hover:text-cyan-400 transition-colors">X (Twitter)</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
