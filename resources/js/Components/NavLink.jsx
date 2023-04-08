import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'text-sm font-medium text-emerald-600 hover:text-emerald-600'
                    : 'text-sm font-medium text-gray-500 hover:text-gray-700'
            }
        >
            {children}
        </Link>
    );
}
