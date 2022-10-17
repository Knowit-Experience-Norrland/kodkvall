import { gql } from "@apollo/client";
export const GENRES_QUERY = gql`
  query Genres {
    GenreCollection
  }
`;

export const MEDIA_LIST_QUERY = gql`
  query MediaList(
    $perPage: Int
    $sort: [MediaSort]
    $formatIn: [MediaFormat]
    $genres: [String]
  ) {
    Page(perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: $sort, format_in: $formatIn, genre_in: $genres) {
        id
        popularity
        title {
          english
        }
        type
        format
        description
        episodes
        chapters
        volumes
        coverImage {
          large
        }
        bannerImage
        genres
        averageScore
        siteUrl
      }
    }
  }
`;
