import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/inertia-react';

export default function Guest({children}) {
    return (
        <div style={{background: 'var(--vkui--color_background)'}}>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div className={'flex items-center justify-center flex-col mb-8'}>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500"/>
                    </Link>
                    <span style={{color: 'var(--vkui--color_text_primary)'}} className={'text-2xl text-center'}>
                    Profline
                </span>
                </div>

                <div className="max-w-xl w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
