export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-neutral-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-500">01.</span> About Me
                </h2>

                <div className="prose prose-invert prose-lg max-w-none text-neutral-400">
                    <p>
                        I am a Quantum Algorithm & ML Engineer driven by the desire to bridge the gap between theoretical physics and practical application. My background in Applied Physics at Waseda University provides the rigorous foundation, but my passion lies in building real systems that work.
                    </p>
                    <p>
                        I don't just study algorithms; I implement them. From simulating Shor's algorithm for ECDLP to developing autonomous agents for quantum software development, I focus on the "how" as much as the "why." I believe the future of deep tech belongs to those who can translate complex equations into robust, scalable code.
                    </p>
                    <p>
                        Currently, I'm exploring the frontiers of Quantum × AI, looking for opportunities to innovate and eventually build my own ventures in this space.
                    </p>
                </div>
            </div>
        </section>
    );
}
