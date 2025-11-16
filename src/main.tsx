import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "@/App.tsx";
import store from "@/common/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@/common/context/theme-provider.tsx";

createRoot(document.getElementById('root')!).render(
            <StrictMode>
                <ThemeProvider defaultTheme={'system'} storageKey={'vite-ui-theme'}>
                    <Provider store={store}>
                <App/>
                    </Provider>
                </ThemeProvider>
            </StrictMode>
)
