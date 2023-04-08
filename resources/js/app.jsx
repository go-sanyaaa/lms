import './bootstrap';
import '../css/app.css';
import './Components/InputTextEditor/styles.css'
import 'antd/dist/antd.variable.less';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ConfigProvider} from 'antd';
import 'moment/dist/locale/ru'
import ru from 'antd/es/locale/ru_RU'

ConfigProvider.config({
    theme: {
        primaryColor: '#12b981',
    },
});

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <ConfigProvider locale={ru}>
                <App {...props} />
            </ConfigProvider>
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });
