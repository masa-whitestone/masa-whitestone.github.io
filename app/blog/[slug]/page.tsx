import { getPostData, getSortedPostsData } from "@/lib/mdx";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map((post) => ({
        slug: post.id,
    }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = getPostData(slug);

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-200">
            <Navbar />

            <article className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-500 hover:text-cyan-400 transition-colors mb-8">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>

                    <header className="mb-12">
                        <div className="flex flex-wrap gap-4 items-center mb-6 text-sm">
                            <span className="text-cyan-500 font-mono">{postData.date}</span>
                            <span className="px-2 py-1 bg-neutral-800 rounded text-neutral-400 text-xs">{postData.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            {postData.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {postData.tags.map(tag => (
                                <span key={tag} className="text-xs text-neutral-500">#{tag}</span>
                            ))}
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg prose-cyan max-w-none">
                        <MDXRemote source={postData.content} />
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
