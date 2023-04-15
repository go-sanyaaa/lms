import './bootstrap';
import '../css/app.css';
import './Components/InputTextEditor/styles.css'
import '@vkontakte/vkui/dist/vkui.css'
import 'antd/dist/antd.variable.less';

import React from 'react';
import {createRoot} from 'react-dom/client';
import {createInertiaApp} from '@inertiajs/inertia-react';
import {InertiaProgress} from '@inertiajs/progress';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import 'moment/dist/locale/ru'
import {AdaptivityProvider, AppRoot, ConfigProvider, WebviewType} from "@vkontakte/vkui";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({el, App, props}) {
        const root = createRoot(el);

        root.render(
            <ConfigProvider platform={'android'} webviewType={WebviewType.INTERNAL}>
                <AdaptivityProvider>
                    <AppRoot>
                        <App {...props} />
                    </AppRoot>
                </AdaptivityProvider>
            </ConfigProvider>
        );
    },
});

InertiaProgress.init({ color: '#4B5563' });
