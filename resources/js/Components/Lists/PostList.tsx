import { Link } from "@inertiajs/react"
import { Post } from "@/Pages/Welcome"
import { EyeIcon } from "@heroicons/react/24/solid"

export function PostList(props: { list: Post[] }) {

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
                <h1 className="text-2xl font-bold text-gray-800"><span className="text-red-400">Posts</span> recentes</h1>
            </div>
            <div className="flex justify-start flex-wrap pb-3 gap-3 mt-5 cursor-pointer rounded-l-lg">

                {props.list.map((post: Post) =>
                    <Link href={route('posts.show', { id: post.id })}
                        key={post.id}
                        className="max-w-sm bg-white hover:bg-gray-100 border border-gray-200 rounded-lg shadow"
                    >
                        <div className='relative h-56 w-full overflow-y-hidden'>
                            <img className="rounded-t-lg h-full w-full" src={post.image} alt="post image" />
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-center mb-2">
                                <h5 className="text-xl mr-2 font-bold tracking-tight text-gray-900">{post.name}</h5>
                                <div className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-800 shadow-sm">
                                    {post.category}
                                </div>
                            </div>
                            <div className="h-20 text-gray-800 break-words text-justify mt-2">
                                {post.description}
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                                {post.tags.split(",").map((tag: string) => (
                                    <div
                                        key={tag}
                                        className="min-w-fit text-white bg-neutral-800 text-sm font-medium px-2.5 py-0.5 rounded border border-gray-700 inline-flex items-center justify-center"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Link>
                )}

                {props.list.length === 0 &&
                    <div>
                        <span className="text-gray-800">Nenhum post encontrado.</span>
                    </div>
                }

            </div>
        </div>
    )
}
