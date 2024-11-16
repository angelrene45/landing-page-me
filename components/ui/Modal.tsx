import React, { useEffect, useRef } from "react";

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
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            // Disable page scrolling when modal is open
            document.body.style.overflow = 'hidden';

            // Add a new entry to the history stack
            window.history.pushState({ modalOpen: true }, "");

            // Handle the browser back button to close the modal
            const handlePopState = () => {
                onClose();
            };

            // Close the modal when the Escape key is pressed
            const handleEsc = (event: KeyboardEvent) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            window.addEventListener('popstate', handlePopState);
            document.addEventListener('keydown', handleEsc);

            // Cleanup when modal closes or component unmounts
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('popstate', handlePopState);
                document.removeEventListener('keydown', handleEsc);
            };
        }
    }, [isOpen, onClose]);

    const handleClickOutside = (event: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
            window.history.back(); // Ensure history state is reverted when modal closes
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleClickOutside}
        >
            {/* Modal container with increased width and fixed height */}
            <div
                className="modal-content bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl h-[88vh] overflow-y-auto relative"
                ref={modalRef}
            >
                {/* Close button */}
                <button
                    onClick={() => {
                        onClose();
                        window.history.back(); // Ensure history state is reverted when modal closes
                    }}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
                >
                    &times;
                </button>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">{title}</h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{description}</p>

                {/* Content sections */}
                {features && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Features:</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {technologies && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Technologies:</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            {technologies.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {outcomes && (
                    <div>
                        <h3 className="text-lg font-semibold mt-4">Outcomes:</h3>
                        <ul className="list-disc list-inside text-sm sm:text-base text-gray-600 dark:text-gray-400">
                            {outcomes.map((outcome, index) => (
                                <li key={index}>{outcome}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;
