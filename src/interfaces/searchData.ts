import ISearchResult from "./searchResult";

interface ISearchData {
    searchType: string;
    expression: string;
    results: ISearchResult[];
    errorMessage?: string;
}

export default ISearchData