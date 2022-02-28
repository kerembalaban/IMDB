import React, {
    createContext,
    useState,
    useEffect,
    useCallback,
} from 'react';
import { StyleSheet, View,Text,SafeAreaView } from 'react-native'
import NetInfo from "@react-native-community/netinfo";
import Spinner from 'react-native-loading-spinner-overlay';
import RNBootSplash from "react-native-bootsplash";

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
    const [splashVisibility, setSplashVisibility] = useState(true);
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [hasConnection, setHasConnection] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setHasConnection(state.isInternetReachable)
          });
        return () => {
            unsubscribe()
        }
    }, []);

    const setLoader = useCallback(args => {
        setLoaderVisible(args)
    }, [loaderVisible])

    // const showErrorModal = useCallback((type,message) => {
    //     setLoaderVisible(false)
    //     setTimeout(() => {
    //         AlertDialog.show({
    //             type: type,
    //             title: 'Upload complete',
    //             textBody: message,
    //         })
    //     }, 300); 
    // }, [loaderVisible])

    const hideSplash = useCallback(() => {
        RNBootSplash.hide({ fade: true });
        setSplashVisibility(false)
    }, [splashVisibility])

    return (
        <AppContext.Provider
            value={{
                hideSplash,
                setLoader,
                hasConnection
            }}>
            <Spinner
                visible={loaderVisible}
                overlayColor={'rgba(51, 49, 62, 0.95)'} />
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider