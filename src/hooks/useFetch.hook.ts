
import { useNetInfo } from "@react-native-community/netinfo"
import { useEffect, useState } from "react"
import { Alert } from "react-native"

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>()
    const [error, setError] = useState<string | null>()
    const [loading, setLoading] = useState<boolean>(false)
    const netInfo = useNetInfo()

    useEffect(() => {
        if (!url || !url.trim()) {
            setData(null)
            setError(null)
            return
        }

        if (!netInfo.isInternetReachable) {
            setError('There is no internet connection, please check your internet')
            setData(null)
            return
        }

        const searchData = async () => { 
            try {
                setLoading(true)
                const response = await fetch(url);
                const data = await response.json()
                if (data.errorMessage) {
                    setError(data.errorMessage)
                    setData(null)
                } else {
                    setData(data)
                    setError(null)
                }
                setLoading(false)
            } catch (err) {
                setError("Unknown error occured")
                setData(null)
                setLoading(false)
            }
        };

        searchData()
    }, [url])

    return { data, error, loading }
}

export default useFetch