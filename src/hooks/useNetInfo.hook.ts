import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

let currentNetwork: boolean | null

NetInfo.fetch().then((state) => {
    currentNetwork = state.isInternetReachable;
});

const useNetInfo = () => {
    const [netInfo, setNetInfo] = useState(currentNetwork);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener((state) => {
            setNetInfo(state.isInternetReachable);
        });
        return () => unsubscribe();
    }, []);

    return netInfo;
};

export default useNetInfo;