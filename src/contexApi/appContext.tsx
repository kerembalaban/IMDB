import React, { createContext, useState, FC } from "react";
import ISearchResult from "../interfaces/searchResult";
import { AppContextState } from "./types";

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

    const addFavorite = (item: ISearchResult) => setFavorites((favorites) => [...favorites, item]);
    const addRecentSearch = (item: ISearchResult) => setRecents((recents) => [...recents, item]);
    const removeFavorite = (item: ISearchResult) => { }
    const removeRecentSearch = (item: ISearchResult) => { }

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