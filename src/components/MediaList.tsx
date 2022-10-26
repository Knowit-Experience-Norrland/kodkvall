import { useQuery } from "@apollo/client";
import "../styles/MediaList.scss";
import React, { useEffect, useState } from "react";
import { MEDIA_LIST_QUERY } from "../graphql";
import {
  MediaFormat,
  MediaListQuery,
  MediaListQueryVariables,
  MediaSort,
} from "../graphql/types/graphql";
import { Genres } from "./Genres";
import { MovieCard } from "./MovieCard";

export const MediaList: React.FC = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
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

  useEffect(() => {
    console.log(selectedGenres);
  }, [selectedGenres]);

  return (
    <div>
      <Genres setSelectedGenres={setSelectedGenres} selectedGenres={selectedGenres} title="Genres" />
      <h2>Media</h2>
      <ul className="medialist__list">
        {!loading &&
          data?.Page?.media?.map((media) => (
            <>              
              <li key={media?.id}>
                <MovieCard title={media?.title?.english} img={media?.coverImage?.large} rating={media?.averageScore} />
              </li>
            </>
          ))}
      </ul>
    </div>
  );
};
