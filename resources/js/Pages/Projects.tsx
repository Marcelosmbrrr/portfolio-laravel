import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Paginator } from '@/Components/Table/Paginator';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

export default function Projects({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>}
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className="p-1.5 min-w-full inline-block align-middle">
                                    <div className="border rounded-lg divide-y divide-gray-200">

                                        <div className="flex justify-between py-3 px-4">
                                            <div className="relative max-w-xs">
                                                <label className="sr-only">Search</label>
                                                <input
                                                    type="text"
                                                    name="hs-table-with-pagination-search"
                                                    id="hs-table-with-pagination-search"
                                                    className="py-2 ps-3 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-red-500 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none"
                                                    placeholder="Search for items"
                                                />
                                            </div>
                                            <div>
                                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                                                    Create Project
                                                </button>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-neutral-900">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">Phase</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">Name</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">Technologies</th>
                                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-white uppercase">Description</th>
                                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-white uppercase">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    {[
                                                        { id: 1, name: 'John Brown', age: 45, address: 'New York No. 1 Lake Park' },
                                                        { id: 2, name: 'Jim Green', age: 27, address: 'London No. 1 Lake Park' },
                                                        { id: 3, name: 'Joe Black', age: 31, address: 'Sidney No. 1 Lake Park' },
                                                        { id: 4, name: 'Edward King', age: 16, address: 'LA No. 1 Lake Park' },
                                                        { id: 5, name: 'Jim Red', age: 45, address: 'Melbourne No. 1 Lake Park' },
                                                    ].map((person) => (
                                                        <tr key={person.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{person.name}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{person.age}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{person.address}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{person.address}</td>
                                                            <td className="px-6 py-4 space-x-2 whitespace-nowrap text-end text-sm font-medium">
                                                                <button>
                                                                    <PencilSquareIcon className="flex-shrink-0 w-5 h-5 text-green-600 transition duration-75" />
                                                                </button>
                                                                <button>
                                                                    <TrashIcon className="flex-shrink-0 w-5 h-5 text-red-600 transition duration-75" />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <Paginator />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}