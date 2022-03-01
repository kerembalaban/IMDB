
export type HomeStackParams = {
    Home: undefined;
    MovieDetail: { id: string };
};

export type SearchStackParams = {
    Search: undefined;
    MovieDetail: { id: string };
};

export interface RootStackParamList
    extends HomeStackParams, SearchStackParams { }

declare global {
    namespace ReactNavigation {
        interface RootParamList
            extends RootStackParamList { }
    }
}
