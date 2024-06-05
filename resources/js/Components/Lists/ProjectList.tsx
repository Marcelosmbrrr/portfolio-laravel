import { Project } from "@/Pages/Welcome";

export function ProjectList(props: { list: Project[] }) {

    function renderTechBadges(badges: string[]) {
        return badges.map((badge) =>
            <div v-for="technology in project.technology" key={badge}
                className="min-w-fit text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium px-2.5 py-0.5 rounded border border-gray-700 inline-flex items-center justify-center">
                {badge}
            </div>
        )
    }

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

                {props.list.length > 0 && props.list.map((project: Project) =>
                    <div v-if="projects!.length > 0" v-for="project in projects" key={project.id}
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] dark:bg-gray-800 dark:border-gray-700">
                        <div className='relative h-56 w-full overflow-y-hidden'>
                            <img className="rounded-t-lg h-full w-full" src={project.image} alt="project image" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="text-2xl mr-2 font-bold tracking-tight text-gray-900 dark:text-white">{project.name}
                                </h5>
                                <div className="bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                    {project.status}</div>
                            </div>
                            <div className="h-20 text-gray-800 dark:text-white break-words text-justify mt-2">
                                {project.description}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {renderTechBadges(project.technologies)}
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