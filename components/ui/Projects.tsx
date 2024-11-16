import React, { useEffect, useState } from "react";
import Modal from "./Modal";

interface Project {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    outcomes: string[];
}

interface ProjectProps {
    title: string;
    jsonPath: string;
}

const Projects: React.FC<ProjectProps> = ({ title, jsonPath }) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        fetch(jsonPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: Project[]) => setProjects(data))
            .catch((error: Error) => setError(error.message));
    }, [jsonPath]);

    if (error) {
        return (
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{title}</h2>
                <p className="text-red-500">Error loading data: {error}</p>
            </div>
        );
    }

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">{title}</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-6 shadow-md bg-white dark:bg-gray-800 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-transform duration-200 relative"
                                onClick={() => setSelectedProject(project)}
                            >
                                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{project.description}</p>

                                {/* Indicador de interacción */}
                                <div className="absolute bottom-3 right-3 text-blue-500 text-sm flex items-center hover:text-blue-700 transition-colors duration-200">
                                    <span>View Details</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedProject && (
                <Modal
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                    title={selectedProject.title}
                    description={selectedProject.description}
                    features={selectedProject.features}
                    technologies={selectedProject.technologies}
                    outcomes={selectedProject.outcomes}
                />
            )}
        </>
    );
};

export default Projects;
