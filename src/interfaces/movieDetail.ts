import ISearchResult from "./searchResult";

interface IMovieDetail extends ISearchResult {
    imDbRating: string,
    genres: string,
    stars: string,
    directors: string
}

export default IMovieDetail