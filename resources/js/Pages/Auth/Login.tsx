import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    
    const { data, setData, post, processing, errors, reset } = useForm({
        username: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <label className="block font-medium text-sm text-gray-700">Username</label>
                    <input type="text" className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm" onChange={(e) => setData('username', e.target.value)} />
                    <p className='text-sm text-red-600 mt-2'>{errors.username}</p>
                </div>

                <div className="mt-4">
                    <label className="block font-medium text-sm text-gray-700">Password</label>
                    <input type="password" className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm" onChange={(e) => setData('password', e.target.value)} />
                    <p className='text-sm text-red-600 mt-2'>{errors.password}</p>
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <input checked={data.remember} type='checkbox' className='rounded border-gray-300 text-red-600 shadow-sm focus:ring-red-500' onChange={(e) => setData('remember', e.target.checked)} />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                    {processing ? "Loading..." : "Log in"}
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
