import { useQuery } from "@apollo/client";
import React from "react";
import { GENRES_QUERY } from "../graphql/queries";
import { GenresQuery, GenresQueryVariables } from "../graphql/types/graphql";

interface GenresProps {
  title: string;
  selectedGenres: string[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<string[]>>;
}

const Genres: React.FC<GenresProps> = ({ title, selectedGenres, setSelectedGenres }) => {
  const { data, loading } = useQuery<GenresQuery, GenresQueryVariables>(
    GENRES_QUERY
  );

  const SelectGenre = (clickedGenre: string) => {
    if(selectedGenres.includes(clickedGenre)){
      setSelectedGenres(selectedGenres.filter((genre) => genre !== clickedGenre))
    }else{
      setSelectedGenres([...selectedGenres, clickedGenre]);
    }    
  }

  return (
    <div >
      <h2>{title}</h2>
      <ul className="medialist__genre-list">
        {!loading &&
          data?.GenreCollection?.map((genre) => <li key={genre}> 
          <button 
            onClick={(() => genre && SelectGenre(genre))}
            className={genre && selectedGenres.includes(genre) ? "active" : ""}
           >
            {genre}
            </button>          
          </li>)}
      </ul>
    </div>
  );
};

export default Genres;
