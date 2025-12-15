const experiences = [
    {
        company: "Osaka University – Quantum Software Research Hub",
        role: "Quantum Software Researcher",
        period: "Present",
        description: "Engaging in advanced quantum software research and development."
    },
    {
        company: "BlocQ, Inc.",
        role: "Quantum Algorithms Research Intern",
        period: "Past",
        description: "Focused on the implementation and analysis of Shor's algorithm for ECDLP."
    },
    {
        company: "Waseda University",
        role: "Applied Physics",
        period: "2024 – 2028 (Expected)",
        description: "Building a strong foundation in physics and mathematics."
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-neutral-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-500">03.</span> Experience
                </h2>

                <div className="space-y-12 border-l border-neutral-800 ml-3 pl-8 relative">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-neutral-900 bg-cyan-500" />
                            <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                            <div className="text-cyan-400 font-mono text-sm mb-2">{exp.role}</div>
                            <div className="text-neutral-500 text-xs mb-4 uppercase tracking-wider">{exp.period}</div>
                            <p className="text-neutral-400 max-w-2xl">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
