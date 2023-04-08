import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-50">
            <div className={'flex items-center justify-center flex-col mb-8'}>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
                <span className={'text-2xl text-gray-600 text-center'}>
                    Цифровая платформа обучения
                </span>
            </div>

            <div className="max-w-xl w-full">
                {children}
            </div>
        </div>
    );
}
