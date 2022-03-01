import ISearchResult from "../interfaces/searchResult";

export type AppContextState = {
    favorites: ISearchResult[],
    recents: ISearchResult[],
    addFavorite: (item: ISearchResult) => void,
    addRecentSearch: (item: ISearchResult) => void,
    removeFavorite: (item: ISearchResult) => void,
    removeRecentSearch: (item: ISearchResult) => void
};