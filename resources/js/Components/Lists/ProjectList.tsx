import { Project } from "@/Pages/Welcome";
import { EyeIcon } from "@heroicons/react/24/solid";

export function ProjectList(props: { list: Project[] }) {

    return (
        <div className="max-w-7xl px-5 md:px-0 mx-auto mt-10">

            <div className="flex items-center gap-2">
                <div className="text-red-400">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800"><span className="text-red-400">Projetos</span> recentes</h1>
            </div>

            <div className="flex justify-start flex-wrap pb-3 mt-5 gap-3 cursor-pointer rounded-l-lg">

                {props.list.map((project: Project) =>
                    <div className="max-w-sm flex flex-col bg-white border shadow-sm rounded-xl">
                        <img className="w-full h-auto rounded-t-xl" src={project.image} alt="Image Description" />
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-gray-800">
                                {project.name}
                            </h3>
                            <p className="mt-1 text-gray-500">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {project.technologies.map((tech) =>
                                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                                        {tech}
                                    </span>
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="mt-5 text-xs text-gray-500">
                                    Phase: {project.phase}
                                </p>
                                <EyeIcon className="w-5 h-5 text-red-600" />
                            </div>
                        </div>
                    </div>
                )}

                {props.list.length === 0 &&
                    <div>
                        <span className="text-gray-800">Nenhum projetado encontrado.</span>
                    </div>
                }

            </div>
        </div>
    )

}