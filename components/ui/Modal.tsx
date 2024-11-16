import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    features?: string[];
    technologies?: string[];
    outcomes?: string[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, features, technologies, outcomes }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-y-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-3xl relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
                >
                    &times;
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

                {/* Features */}
                {features && (
                    <>
                        <h3 className="text-lg font-semibold mt-4">Features:</h3>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Technologies */}
                {technologies && (
                    <>
                        <h3 className="text-lg font-semibold mt-4">Technologies:</h3>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </>
                )}

                {/* Outcomes */}
                {outcomes && (
                    <>
                        <h3 className="text-lg font-semibold mt-4">Outcomes:</h3>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            {outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
