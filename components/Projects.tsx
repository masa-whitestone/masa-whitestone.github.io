import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "ALDNOAH.QUANTUM",
        description: "Developing autonomous AI agents that design, implement, and test quantum algorithms, collaborating with researchers and engineers connected to AIST and NVIDIA. Selected for NEDO's program.",
        role: "AI Scientist / Lead Developer",
        tech: ["Quantum Computing", "AI Agents", "LLMs", "Python"],
        context: "NEDO Challenge / Research",
        links: []
    },
    {
        title: "Shor's Algorithm for ECDLP",
        description: "Implementation and analysis of Shor's algorithm targeting Elliptic Curve Discrete Logarithm Problems, focusing on resource estimation and circuit optimization.",
        role: "Researcher & Implementer",
        tech: ["Quantum Algorithms", "Cryptography", "Qiskit", "Python"],
        context: "Research Internship @ BlocQ, Inc.",
        links: []
    },
    {
        title: "Qiskit Fall Fest 2025",
        description: "Lead organizer for the extension event of IBM Quantum's global festival. Planning hackathons and workshops to foster the local quantum community.",
        role: "Lead Organizer",
        tech: ["Community Building", "Event Management", "Qiskit"],
        context: "Community / IBM Quantum",
        links: []
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                    <span className="text-cyan-500">02.</span> Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-cyan-500 text-sm font-mono">{project.context}</div>
                                <div className="flex gap-4">
                                    {/* Add links if available */}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Role</span>
                                <div className="text-neutral-300 text-sm">{project.role}</div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-cyan-500/80 bg-cyan-950/30 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
