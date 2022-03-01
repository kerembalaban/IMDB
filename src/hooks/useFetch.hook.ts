
import { useEffect, useState } from "react"

const useFetch = <T>(url: string) => {

    const [data, setData] = useState<T | null>()
    const [error, setError] = useState<string | null>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!url || !url.trim()) {
            return;
        }
        
        const searchData = async () => {
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
        };

        searchData();
    }, [url])

    return { data,error, loading }
}

export default useFetch