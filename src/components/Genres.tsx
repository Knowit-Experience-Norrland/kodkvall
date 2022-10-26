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

  const SelectGenre = (clickedGenre: string) => {
    if (selectedGenres.includes(clickedGenre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== clickedGenre));
    } else {
      setSelectedGenres([...selectedGenres, clickedGenre]);
    }    
  };

  return (
    <div className="medialist__genre-list">
      <h2>{title}</h2>
      <ul>
        {!loading &&
          data?.GenreCollection?.map(
            (genre) =>
              genre && (
                <li key={genre}>
                  <button
                    onClick={() => {
                      SelectGenre(genre);
                    }}
                    className={selectedGenres.includes(genre) ? "active" : ""}
                  >
                    {genre}
                  </button>
                </li>
              )
          )}
      </ul>
    </div>
  );
};
