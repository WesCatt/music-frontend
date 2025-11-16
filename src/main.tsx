import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import store from "./store";
import {Provider} from 'react-redux'
import {RouterProvider} from "react-router/dom";
import router from "./router";
import {ThemeProvider} from "@/context/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme={'system'} storageKey={'vite-ui-theme'}>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </ThemeProvider>
    </StrictMode>,
)
