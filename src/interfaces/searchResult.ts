
interface ISearchResult {
    searchType: string;
    expression: string;
    results: ISearchResult[];
    errorMessage?: string;
}

export default ISearchResult