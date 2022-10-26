import { useQuery } from "@apollo/client";
import React from "react";
import { GENRES_QUERY } from "../graphql";
import { GenresQuery, GenresQueryVariables } from "../graphql/types/graphql";
import "../styles/MediaList.scss";

interface GenresProps {
  title: string;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Genres: React.FC<GenresProps> = ({title, selectedGenres, setSelectedGenres }) => {
  const { data, loading } = useQuery<GenresQuery, GenresQueryVariables>(
    GENRES_QUERY
  );  

  const SelectGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const HighlightGenre = (genre: string) => {
    return selectedGenres.includes(genre) ? "active" : "";
  };

  return (
    <div className="medialist__genre-list">
      <h2>{title}</h2>
      <ul>
        {!loading &&
          data?.GenreCollection?.map((genre) => (
            <li key={genre}>
              <button
                onClick={() => {
                  genre && SelectGenre(genre);
                }}
                className={`${genre && HighlightGenre(genre)}`}
              >
                {genre}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};
