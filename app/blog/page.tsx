import Link from "next/link";
import { getSortedPostsData } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-200">
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors mb-8">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>

                    <h1 className="text-4xl font-bold text-white mb-12">Blog</h1>

                    <div className="grid gap-8">
                        {allPostsData.map(({ id, date, title, excerpt, category, tags }) => (
                            <Link key={id} href={`/blog/${id}`} className="group block bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all">
                                <div className="flex flex-wrap gap-4 items-center mb-4 text-sm">
                                    <span className="text-cyan-500 font-mono">{date}</span>
                                    <span className="px-2 py-1 bg-neutral-800 rounded text-neutral-400 text-xs">{category}</span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                    {title}
                                </h2>

                                <p className="text-neutral-400 mb-6">
                                    {excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {tags.map(tag => (
                                        <span key={tag} className="text-xs text-neutral-500">#{tag}</span>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
