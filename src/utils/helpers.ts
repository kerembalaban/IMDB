import AsyncStorage from "@react-native-async-storage/async-storage"
import ISearchResult from "../interfaces/searchResult";

export const storeData = async (key: string, value: ISearchResult[]) => {
    try {
        const jsonData = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonData)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
        // error reading value
    }
}