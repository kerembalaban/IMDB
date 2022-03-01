import ISearchResult from "./searchResult";

interface IMovieDetail extends ISearchResult {
    year: string,
    imDbRating: string,
    genres: string,
    stars: string,
    directors: string,
    runtimeStr: string,
    trailer: {
        thumbnailUrl: string,
        videoDescription: string
    }
}

export default IMovieDetail