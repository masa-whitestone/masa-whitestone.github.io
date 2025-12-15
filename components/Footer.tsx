import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-neutral-500 text-sm">
                    © {new Date().getFullYear()} Masaki Shiraishi. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    <Link href="https://github.com/masa-whitestone" target="_blank" className="text-neutral-500 hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://linkedin.com/in/masaki-shiraishi" target="_blank" className="text-neutral-500 hover:text-cyan-400 transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://x.com/masawhitestone" target="_blank" className="text-neutral-500 hover:text-cyan-400 transition-colors">
                        <Twitter size={20} />
                    </Link>
                    <Link href="mailto:masaki.shiraishi@fuji.waseda.jp" className="text-neutral-500 hover:text-cyan-400 transition-colors">
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
