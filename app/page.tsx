import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Skills />
            <BlogSection />
            <Contact />
            <Footer />
        </main>
    );
}
