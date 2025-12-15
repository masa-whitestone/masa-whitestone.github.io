import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-500">05.</span> Blog
                </h2>

                <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-cyan-500 text-sm font-mono">Latest Post</span>
                        <span className="text-neutral-500 text-sm font-mono">2025-09-06</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                        A 10-Year Reunion with New York
                    </h3>

                    <p className="text-neutral-400 mb-6 line-clamp-3">
                        It had been 10 years since my last visit to New York. This time, my reunion with the city far exceeded my memories. The city pulsed with an overwhelming energy...
                    </p>

                    <Link
                        href="/blog/new-york-reunion"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        Read Article <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Link href="/blog" className="text-neutral-500 hover:text-white transition-colors text-sm border-b border-transparent hover:border-white pb-1">
                        View all posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
