import ISearchResult from "../interfaces/searchResult";

export type HomeStackParams = {
    Home: undefined;
    MovieDetail: { movie: ISearchResult };
};

export type SearchStackParams = {
    Search: undefined;
    MovieDetail: { movie: ISearchResult };
};

export interface RootStackParamList
    extends HomeStackParams, SearchStackParams { }

declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList { }
    }
}
