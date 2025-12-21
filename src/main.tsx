import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "@/App.tsx";
import store from "@/common/store";
import {Provider} from "react-redux";
import {ThemeProvider} from "@/common/context/theme-provider.tsx";
import {Toaster} from "@/components/ui/sonner.tsx";
import {GoogleOAuthProvider} from "@react-oauth/google";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GoogleOAuthProvider clientId="552165717786-u83io63m5apkfj8qcmvg43j7j6gghfar.apps.googleusercontent.com">
        <ThemeProvider defaultTheme={'system'} storageKey={'vite-ui-theme'}>
            <Provider store={store}>
                <Toaster/>
                <App/>
            </Provider>
        </ThemeProvider>
        </GoogleOAuthProvider>
    </StrictMode>
)
