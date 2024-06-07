import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { User } from '@/types';

interface Project {
    id: number;
    public_id: string;
    phase: string;
    name: string;
    description: string;
    technologies: string;
    created_at: string | null;
    updated_at: string | null;
}

export default function EditProject({ auth, project } : { auth: { user: User }, project: Project }) {

    const { data, setData, patch, processing, errors } = useForm({
        name: project.name,
        phase: project.phase,
        description: project.description,
        technologies: project.technologies,
        image: ""
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects / Edit</h2>}
        >
            <Head title="Projects | Edit" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form className="grid grid-cols-2 gap-3 p-5" onSubmit={submit}>
                            <div>
                                <label htmlFor="input-email" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    value={data.name} onChange={e => setData('name', e.target.value)}
                                    type="text"
                                    id="input-email"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Type post name"
                                />
                                <span className='text-red-500 text-sm'>{errors.name}</span>
                            </div>
                            <div>
                                <label htmlFor="input-category" className="block text-sm font-medium mb-2">Phase</label>
                                <select
                                    value={data.phase} onChange={e => setData('phase', e.target.value)}
                                    id="input-category"
                                    className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <option selected disabled>Select an option</option>
                                    <option value={"ideia"}>Idea</option>
                                    <option value={"planejamento"}>Planning</option>
                                    <option value={"desenvolvimento"}>Planning</option>
                                    <option value={"finalizado"}>Finished</option>
                                    <option value={"publicado"}>Published</option>
                                </select>
                                <span className='text-red-500 text-sm'>{errors.phase}</span>
                            </div>
                            <div className="relative z-50"> {/* Adicionando z-index e posição relativa */}
                                <label htmlFor="input-tags" className="block text-sm font-medium mb-2">Technologies</label>
                                <input
                                    value={data.technologies} onChange={e => setData('technologies', e.target.value)}
                                    type="text"
                                    id="input-tags"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Enter technologies separated by comma"
                                />
                                <span className='text-red-500 text-sm'>{errors.technologies}</span>
                            </div>
                            <div className='flex items-end'>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input type="file" name="file-input" id="file-input" accept='.jpeg,.jpg' className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4" />
                                <span className='text-red-500 text-sm'>{errors.image}</span>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Description</label>
                                <textarea value={data.description} onChange={e => setData('description', e.target.value)} id="textarea-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={3} style={{ resize: 'none' }} placeholder="Type project description"></textarea>
                                <span className='text-red-500 text-sm'>{errors.description}</span>
                            </div>
                            <div className='col-span-2 flex justify-end gap-x-1'>
                                <Link href={route('projects.index')} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                                    Cancel
                                </Link>
                                <button disabled={processing} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                                    {processing ? "Loading..." : "Confirm"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )

}