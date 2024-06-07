import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { PageProps } from '@/types';
import { devIconsList } from '@/utils/DevIconList';

export default function CreateTechnology({ auth }: PageProps) {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        description: "",
        icons: [] as string[]
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();

        post("/technologies", {
            onError: (e) => {
                console.log(e)
            }
        });
    }

    function iconSelection(icon: string) {

        let clone = data.icons;
        let indexOf = clone.indexOf(icon); // -1 or index (0 - n)

        if (data.icons.length === 0 || !Boolean(indexOf + 1)) {
            clone.push(icon);
            setData('icons', clone)
            return;
        }

        clone.splice(indexOf, 1);
        setData('icons', clone)

    }

    function isIconSelected(icon: string) {
        return data.icons.includes(icon) ?
            "flex justify-center items-center h-12 w-12 cursor-pointer border border-gray-200 hover:bg-emerald-200 rounded-lg bg-emerald-400"
            : "flex justify-center items-center h-12 w-12 cursor-pointer border border-gray-200 hover:bg-emerald-200 rounded-lg";
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Technologies / Create</h2>}
        >
            <Head title="Technologies | Create" />

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
                            <div className="col-span-2">
                                <label htmlFor="technologies" className="block text-sm font-medium text-gray-900 mb-2">Icons</label>
                                <div className="w-full h-fit flex flex-wrap gap-1">
                                    {devIconsList.map((icon) =>
                                        <div onClick={() => iconSelection(icon)} key={icon}
                                            className={isIconSelected(icon)}>
                                            <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}.svg`} className="w-8 h-8" />
                                        </div>
                                    )}
                                </div>
                                <span className='text-red-500 text-sm'>{errors.icons}</span>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Description</label>
                                <textarea value={data.description} onChange={e => setData('description', e.target.value)} id="textarea-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={3} style={{ resize: 'none' }} placeholder="Type tech description"></textarea>
                                <span className='text-red-500 text-sm'>{errors.description}</span>
                            </div>
                            <div className='col-span-2 flex justify-end gap-x-1'>
                                <Link href={route('technologies.index')} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                                    Cancel
                                </Link>
                                <button disabled={processing} type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none">
                                    {processing ? "Loading..." : "Confirm"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout >
    )

}