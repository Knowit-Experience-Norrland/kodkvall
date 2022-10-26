import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { MEDIA_LIST_QUERY } from '../graphql/queries'
import { MediaFormat, MediaSort, PageQuery, PageQueryVariables } from '../graphql/types/graphql'
import Genres from './Genres'

const MediaList: React.FC = () => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>(["action"])

    const {data, loading} = useQuery<PageQuery, PageQueryVariables>(MEDIA_LIST_QUERY,{
        variables: {
            perPage: 10,
            sort: [MediaSort.PopularityDesc],
            formatIn: [MediaFormat.Movie, MediaFormat.Tv],
            genreIn: selectedGenres
        }
    });
  return (
    <div>
        <Genres title='Genres' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} />
        <h2>Media</h2>
        <ul>
            {!loading && data?.Page?.media?.map(media => <li key={media?.id}>{media?.title?.english}</li>)}
        </ul>
    </div>
  )
}

export default MediaList