import { useQuery } from "@apollo/client";
import React from "react";
import { MEDIA_LIST_QUERY } from "../graphql";
import {
  MediaFormat,
  MediaListQuery,
  MediaListQueryVariables,
  MediaSort,
} from "../graphql/types/graphql";
import { Genres } from "./Genres";

export const MediaList: React.FC = () => {
  const { data, loading } = useQuery<MediaListQuery, MediaListQueryVariables>(
    MEDIA_LIST_QUERY,
    {
      variables: {
        perPage: 10,
        sort: [MediaSort.PopularityDesc],
        formatIn: [MediaFormat.Movie, MediaFormat.Tv],
        genres: [],
      },
    }
  );

  return (
    <div>
      <Genres title="Genres" />
      <h2>Media</h2>
      <ul>
        {!loading &&
          data?.Page?.media?.map((media) => (
            <li key={media?.id}>{media?.title?.english}</li>
          ))}
      </ul>
    </div>
  );
};
