import { Technology } from "@/Pages/Welcome";

export function TechList(props: { list: Technology[] }) {

    function getIconCdn(icon: string) {
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}.svg`;
    }

    function renderIcons(icons: string[]) {
        return icons.map((icon) =>
            <img v-for="icon in tech.icon" src={getIconCdn(icon)} className="h-10 w-10" alt={`${icon} icon`} />
        )
    }

    return (
        <div className="max-w-7xl px-5 lg:px-0 mx-auto bg-transparent">
            <div className="flex items-center gap-2">
                <div className="text-red-400">
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800"><span className="text-red-400">Tecnologias</span> utilizadas</h1>
            </div>
            <div className='flex flex-wrap gap-8 mt-6'>

                {props.list.map((tech: Technology) =>
                    <div className="flex flex-col p-1 gap-2 basis-72 h-36" key={tech.id}>
                        <div className='h-auto flex gap-2'>
                            {renderIcons(tech.icons)}
                        </div>
                        <div className='h-auto'>
                            <span className='font-semibold text-gray-800'>{tech.name}</span>
                        </div>
                        <div className='h-full w-full text-justify'>
                            <p className='text-sm text-gray-800'>{tech.description}</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}