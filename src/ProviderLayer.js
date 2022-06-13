import DataProvider from "./DataProvider"
import App from "./App";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

import { useFirebaseApp, AuthProvider } from 'reactfire'



const ProviderLayer = () => {
    const app = useFirebaseApp();

    const auth = getAuth(app);

    return (
        <AuthProvider sdk={auth}>
            <DataProvider>
                <App />
            </DataProvider>
        </AuthProvider>
    )
}
export default ProviderLayer;