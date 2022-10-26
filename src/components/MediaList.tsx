import { useQuery } from "@apollo/client";
import "../styles/MediaList.scss";
import React, {  useState } from "react";
import { MEDIA_LIST_QUERY } from "../graphql";
import {
  Media,
  MediaFormat,
  MediaListQuery,
  MediaListQueryVariables,
  MediaSort,
} from "../graphql/types/graphql";
import { Genres } from "./Genres";
import { MovieCard } from "./MovieCard";
import { SkeletonCard } from "./SkeletonCard";

export const MediaList: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>(["Action"]);
  const PER_PAGE = 10;

  const { data, loading } = useQuery<MediaListQuery, MediaListQueryVariables>(
    MEDIA_LIST_QUERY,
    {
      variables: {
        perPage: PER_PAGE,
        sort: [MediaSort.PopularityDesc],
        formatIn: [MediaFormat.Movie, MediaFormat.Tv],
        genres: selectedGenres,
      },
    }
  );

  return (
    <div>
      <Genres
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        title="Genres"
      />
      <h2>
        Media{" "}
        {/* {data?.Page?.media && data?.Page?.media?.length > 0 ? " - Results: " + data?.Page?.media?.length : ""} */}
      </h2>
      <ul className="medialist__list">
        {!loading
          ? data?.Page?.media?.map((media, i) => (
              <li key={media?.id}>
                <MovieCard {...(media as Media)} />
              </li>
            ))
          : [...Array(10)].map((_, i) => (
              <li key={"skeleton" + i}>
                <SkeletonCard />
              </li>
            ))}
      </ul>
    </div>
  );
};
