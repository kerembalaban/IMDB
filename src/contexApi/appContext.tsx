import React, { createContext, useState, FC, useEffect } from "react";
import ISearchResult from "../interfaces/searchResult";
import { AppContextState } from "./types";
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";
import { getData, storeData } from "../utils/helpers";

const contextDefaultValues: AppContextState = {
    favorites: [],
    recents: [],
    addFavorite: () => { },
    addRecentSearch: () => { },
    removeFavorite: () => { },
    removeRecentSearch: () => { }
};

export const AppContext = createContext<AppContextState>(
    contextDefaultValues
);

const AppProvider: FC = ({ children }) => {
    const [favorites, setFavorites] = useState<ISearchResult[]>(contextDefaultValues.favorites);
    const [recents, setRecents] = useState<ISearchResult[]>(contextDefaultValues.recents);
    
    const addFavorite = async (item: ISearchResult) => {
        let tempFavorites = [...favorites, item]
        setFavorites(tempFavorites)
        storeData("favorites",tempFavorites)
    };

    const addRecentSearch = (item: ISearchResult) => {
        let tempRecents = [...recents, item]
        setRecents(tempRecents)
        storeData("recents",tempRecents)
    }

    const removeFavorite = (item: ISearchResult) => {
        setFavorites(() => favorites.filter(movie => movie.id !== item.id))
    }
    const removeRecentSearch = (item: ISearchResult) => {
        setRecents(() => recents.filter(movie => movie.id !== item.id))
    }

    useEffect(() => {
        const getFavoritesFromAsyncStorage = async () => {
            let data = await getData("favorites")
            setFavorites(data)
        };

        const getRecentsFromAsyncStorage = async () => {
            let data = await getData("recents")
            setRecents(data)
        };

        getFavoritesFromAsyncStorage()
        getRecentsFromAsyncStorage()   
    },[])

    return (
        <AppContext.Provider
            value={{
                favorites,
                recents,
                addFavorite,
                addRecentSearch,
                removeFavorite,
                removeRecentSearch
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;