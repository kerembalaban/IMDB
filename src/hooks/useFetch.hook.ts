
import { useEffect, useState } from "react"
import ISearchData from "../interfaces/searchData"

const useFetch = <ISearchData>(url: string) => {

    const [data, setData] = useState<ISearchData | null>()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!url || !url.trim()){
            return;
        }
        const searchData = async () => {
            const response = await fetch(url);
            const jsonResponse = await response.json()
            if (jsonResponse.errorMessage){
                console.log(jsonResponse.errorMessage)
            }
            setData(data)
          };

          searchData();
    }, [url])

    return { data, loading }
}

export default useFetch