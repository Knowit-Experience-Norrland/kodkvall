import { gql } from "@apollo/client";

export const GENRES_QUERY = gql`
  query Genres {
    GenreCollection
  }
`;

export const MEDIA_LIST_QUERY = gql`
  query Page(
    $perPage: Int
    $formatIn: [MediaFormat]
    $genreIn: [String]
    $sort: [MediaSort]
  ) {
    Page(perPage: $perPage) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(format_in: $formatIn, genre_in: $genreIn, sort: $sort) {
        id
        title {
          english
        }
        type
        format
        episodes
        chapters
        volumes
        coverImage {
          large
        }
        bannerImage
        averageScore
        popularity
        siteUrl
      }
    }
  }
`;
