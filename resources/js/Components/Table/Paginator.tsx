import * as React from 'react';

interface Props {
    last_page: number;
    current_page: number;
    changePage: Function;
}

export function Paginator(props: Props) {

    function nextPage() {
        if (props.current_page < props.last_page) {
            props.changePage(props.current_page + 1);
        }
    }

    function prevPage() {
        if (props.current_page > 1) {
            props.changePage(props.current_page - 1);
        }
    }

    return (
        <div className="py-1 px-4">
            <nav className="flex items-center space-x-1">
                <button
                    onClick={prevPage}
                    type="button"
                    className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                </button>
                <span
                    className="min-w-[40px] flex justify-center items-center text-gray-800 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                >
                    {props.current_page} / {props.last_page}
                </span>
                <button
                    onClick={nextPage}
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