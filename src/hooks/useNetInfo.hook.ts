import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

let currentNetwork: boolean | null



const useNetInfo = () => {
    const [netInfo, setNetInfo] = useState(currentNetwork);

    useEffect(() => {
        NetInfo.fetch().then((state) => {
            setNetInfo(state.isInternetReachable)
        });
        
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(state.isInternetReachable);
        });
        return () => unsubscribe();
    }, []);

    return netInfo;
};

export default useNetInfo;