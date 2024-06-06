import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function ForgotPassword({ status }: { status?: string }) {
    
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Esqueceu a senha? Informe o seu e-mail para receber o link para criar uma nova.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <input value={data.email} type='email' className="w-full border-gray-300 focus:border-red-500 focus:ring-red-500 rounded-md shadow-sm" onChange={(e) => setData('email', e.target.value)} />
                    <p className='text-sm text-red-600 mt-2'>{errors.email}</p>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        {processing ? "Carregando..." : "Enviar Link"} 
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
