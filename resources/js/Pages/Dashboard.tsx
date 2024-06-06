import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';

type Data = { projects: number, posts: number, technologies: number };

export default function Dashboard({ auth, data }: PageProps) {

    const { projects, posts, technologies } = data as Data;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-2 bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="col-span-3 md:col-span-1 flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Technologies
                            </h3>
                            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                                Created: {technologies}
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                Technologies are sets of knowledge about groupable technologies.
                            </p>
                            <Link href={route('technologies.index')} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                Go to
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="col-span-3 md:col-span-1 flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Projects
                            </h3>
                            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                                Created: {projects}
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                Projects are systems developed or under development.
                            </p>
                            <Link href={route('projects.index')} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                Go to
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </Link>
                        </div>

                        <div className="col-span-3 md:col-span-1 flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                Posts
                            </h3>
                            <p className="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-neutral-500">
                                Created: {posts}
                            </p>
                            <p className="mt-2 text-gray-500 dark:text-neutral-400">
                                Posts are publications on various subjects, not limited to programming
                            </p>
                            <Link href={route('posts.index')} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                                Go to
                                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
