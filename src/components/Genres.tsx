import { useQuery } from "@apollo/client";
import React from "react";
import { GENRES_QUERY } from "../graphql";
import { GenresQuery, GenresQueryVariables } from "../graphql/types/graphql";

interface GenresProps {
  title: string;
}

export const Genres: React.FC<GenresProps> = ({ title }) => {
  const { data, loading } = useQuery<GenresQuery, GenresQueryVariables>(
    GENRES_QUERY
  );

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {!loading &&
          data?.GenreCollection?.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  );
};
