import * as React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function CreatePost({ auth }: PageProps) {

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        description: "",
        tags: "",
        is_published: "",
        content: "",
        image: ""
    });

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault();

        post("/posts", {
            onError: (e) => {
                console.log(e)
            }
        });
    }

    function onChangeImage(e: any) {
        const uploaded_file = e.currentTarget.files[0];
        if (uploaded_file && uploaded_file.type.startsWith('image/')) {
            const imgURL = URL.createObjectURL(uploaded_file);
            setData('image', uploaded_file);
        }
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts / Create</h2>}
        >
            <Head title="Posts | Create" />

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
                                <label htmlFor="input-category" className="block text-sm font-medium mb-2">Category</label>
                                <select
                                    value={data.category} onChange={e => setData('category', e.target.value)}
                                    id="input-category"
                                    className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <option selected disabled>Select an option</option>
                                    <option value={"technology"}>Technology</option>
                                    <option value={"philosophy"}>Philosophy</option>
                                </select>
                                <span className='text-red-500 text-sm'>{errors.category}</span>
                            </div>
                            <div className="relative z-50"> {/* Adicionando z-index e posição relativa */}
                                <label htmlFor="input-tags" className="block text-sm font-medium mb-2">Tags</label>
                                <input
                                    value={data.tags}
                                    onChange={e => setData('tags', e.target.value)}
                                    type="text"
                                    id="input-tags"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder="Enter tags separated by comma"
                                />
                            </div>
                            <div>
                                <label htmlFor="input-category" className="block text-sm font-medium mb-2">Publishment</label>
                                <select
                                    value={data.is_published} onChange={e => setData('is_published', e.target.value)}
                                    id="input-category"
                                    className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <option selected disabled>Select an option</option>
                                    <option value="1">Publish</option>
                                    <option value="0">Not Publish</option>
                                </select>
                                <span className='text-red-500 text-sm'>{errors.is_published}</span>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Description</label>
                                <textarea value={data.description} onChange={e => setData('description', e.target.value)} id="textarea-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={3} style={{ resize: 'none' }} placeholder="Type post description"></textarea>
                                <span className='text-red-500 text-sm'>{errors.description}</span>
                            </div>
                            <div className="col-span-2">
                                <label htmlFor="textarea-label" className="block text-sm font-medium mb-2">Content</label>
                                <textarea value={data.content} onChange={e => setData('content', e.target.value)} id="textarea-label" className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" rows={20} style={{ resize: 'none' }} placeholder="Type post content"></textarea>
                                <span className='text-red-500 text-sm'>{errors.content}</span>
                            </div>
                            <div className='col-span-1'>
                                <label htmlFor="file-input" className="sr-only">Choose file</label>
                                <input onChange={onChangeImage} type="file" name="file-input" id="file-input" accept='.jpeg,.jpg' className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4" />
                                <span className='text-red-500 text-sm'>{errors.image}</span>
                            </div>
                            <div className='col-span-2 flex justify-end gap-x-1'>
                                <Link href={route('posts.index')} className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border bg-neutral-900 border-neutral-700 text-white hover:bg-neutral-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none">
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

        </AuthenticatedLayout>
    )

}