import { Link, Head } from '@inertiajs/react';

interface Post {
    id: number;
    is_published: boolean;
    name: string;
    content: string[];
    description: string;
    tags: string;
    category: string;
    image: string;
    created_at: string | null;
    updated_at: string | null;
}

export default function ShowPost({ post }: { post: Post }) {

    return (
        <>
            <Head title="Welcome" />
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
                <img id="background" className="absolute -left-20 top-0 max-w-[877px]" src="https://laravel.com/assets/img/welcome/background.svg" />
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                                    <div>
                                        <p className="text-xl font-bold text-gray-900">Marcelo Moreira</p>
                                        <p className="text-base text-gray-500">Desenvolvedor Full Stack</p>
                                        <p className="text-base text-gray-500">
                                            <time dateTime="2022-02-08" title="February 8th, 2022">{post.updated_at}</time>
                                        </p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">{post.name}</h1>
                        </header>
                        <figure className='my-5'>
                            <img src={post.image} className='rounded-lg' />
                        </figure>
                        {post.content.map((p: string) =>
                            <p className="lead">{p}</p>
                        )}
                    </article>
                </div>
            </main>
        </>
    )
}