import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "@/App.tsx";
import store from "@/common/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@/common/context/theme-provider.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme={'system'} storageKey={'vite-ui-theme'}>
            <Provider store={store}>
                <Toaster/>
                <App/>
            </Provider>
        </ThemeProvider>
    </StrictMode>
)
