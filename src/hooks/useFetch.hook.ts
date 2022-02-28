
import React, { FC, useEffect, useState } from "react"
import ISearchData from "../interfaces/searchData"

const useFetch = <T>(url: string) => {

    const [data, setData] = useState<ISearchData | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const searchData = async () => {
            const response = await fetch(url);
            const data = await response.json()
            setData(data)
          };

          searchData();
    }, [url])

    return { data, loading }
}

export default useFetch