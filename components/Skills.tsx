const skills = [
    "Quantum Computing",
    "Quantum Algorithms",
    "Quantum × AI",
    "Hybrid Methods",
    "AI Agents",
    "Implementation & Prototyping",
    "Python",
    "Qiskit",
    "PennyLane",
    "PyTorch"
];

export default function Skills() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-500">04.</span> Skills & Focus
                </h2>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded text-neutral-300 font-mono text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
