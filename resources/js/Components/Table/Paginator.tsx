import * as React from 'react';

export function Paginator() {
    return (
        <div className="py-1 px-4">
            <nav className="flex items-center space-x-1">
                <button
                    type="button"
                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </button>
                <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                >
                    1
                </button>
                <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                >
                    2
                </button>
                <button
                    type="button"
                    className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                >
                    3
                </button>
                <button
                    type="button"
                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <span className="sr-only">Next</span>
                    <span aria-hidden="true">»</span>
                </button>
            </nav>
        </div>
    )
}