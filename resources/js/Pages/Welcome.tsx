import { Link, Head } from '@inertiajs/react';
import { TechList } from '@/Components/Lists/TechList';
import { ProjectList } from '@/Components/Lists/ProjectList';
import { PostList } from '@/Components/Lists/PostList';

export interface Technology {
    id: string;
    name: string;
    description: string;
    icons: string[];
}

export interface Project {
    id: string;
    name: string;
    phase: string;
    description: string;
    technologies: string[];
    image: string;
}

export interface Post {
    id: string;
    name: string;
    description: string;
    tags: string[];
    image: string;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export default function Welcome(props: { projects: { data: Project[] }, techs: { data: Technology[] }, posts: { data: Post[] } }) {

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50">
                <img id="background" className="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                        <header>
                            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                                    <div className="flex items-center">
                                        <span className="text-red-500 mr-2">
                                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                            </svg>
                                        </span>
                                        <span className="hidden sm:block self-center text-red-500 text-2xl font-semibold whitespace-nowrap">smbr</span>
                                        <span className="sm:hidden text-white self-center text-2xl font-semibold whitespace-nowrap">smbr</span>
                                    </div>
                                    <div className="flex justify-between items-center w-auto order-1">
                                        <ul className="flex items-center mt-4 font-medium space-x-8">
                                            <li>
                                                <a href="https://github.com/Marcelosmbrrr" target="_blank"
                                                    className="block py-2 text-gray-800 rounded lg:p-0 hover:text-red-500 dark:hover:text-red-500 cursor-pointer">
                                                    Github
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/in/marcelosmbr/" target="_blank"
                                                    className="flex py-2 text-gray-800 rounded lg:p-0 hover:text-red-500 dark:hover:text-red-500 cursor-pointer">
                                                    Linkedin
                                                </a>
                                            </li>
                                            <li>
                                                <Link href={route('login')} className="flex py-2 text-gray-800 rounded lg:p-0 hover:text-red-500 dark:hover:text-red-500 cursor-pointer">
                                                    Login
                                                </Link>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </header >

                        <main className="mt-6">
                            <main>
                                {/* Hero */}
                                <section className="grid max-w-screen-xl mt-10 px-4 mx-auto lg:gap-8 xl:gap-0 py-20 lg:grid-cols-12">
                                    <div className="mr-auto place-self-center lg:col-span-7">
                                        <h1
                                            className="max-w-4xl mb-4 text-6xl font-extrabold tracking-tight leading-none dark:text-red-600">
                                            Marcelo<span className="text-gray-800">SMBR</span></h1>
                                        <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-600">
                                            Desenvolvedor Fullstack.
                                        </p>
                                        <a href="https://www.linkedin.com/in/marcelosmbr/" target="_blank"
                                            className="inline-flex mr-2 items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-neutral-800 rounded-lg">
                                            Contato
                                        </a>
                                        <a href='assets/documents/cv.pdf' target='_blank'
                                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-neutral-800 rounded-lg">
                                            Currículo
                                        </a>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-span-5 lg:flex">
                                        <img src="assets/images/praise.png" className="hover:scale-105 transition duration-500 ease-in-out transform" alt="hero-draw" />
                                    </div>
                                </section>
                                {/* Tech listing */}
                                <TechList list={props.techs.data} />
                                {/* Project listing */}
                                <ProjectList list={props.projects.data} />
                                {/* Post listing */}
                                <PostList list={props.posts.data} />
                            </main>
                        </main>

                        <footer>
                            <div className="w-full p-4 md:py-8">
                                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <span className="text-red-400">Portfolio SMBR</span>.</span>
                            </div>
                        </footer>

                    </div>
                </div>
            </div>
        </>
    );
}
