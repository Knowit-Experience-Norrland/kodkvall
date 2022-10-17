/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Genres {\n    GenreCollection\n  }\n": types.GenresDocument,
    "\n  query MediaList(\n    $perPage: Int\n    $sort: [MediaSort]\n    $formatIn: [MediaFormat]\n    $genres: [String]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(sort: $sort, format_in: $formatIn, genre_in: $genres) {\n        id\n        popularity\n        title {\n          english\n        }\n        type\n        format\n        description\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        genres\n        averageScore\n        siteUrl\n      }\n    }\n  }\n": types.MediaListDocument,
};

export function graphql(source: "\n  query Genres {\n    GenreCollection\n  }\n"): (typeof documents)["\n  query Genres {\n    GenreCollection\n  }\n"];
export function graphql(source: "\n  query MediaList(\n    $perPage: Int\n    $sort: [MediaSort]\n    $formatIn: [MediaFormat]\n    $genres: [String]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(sort: $sort, format_in: $formatIn, genre_in: $genres) {\n        id\n        popularity\n        title {\n          english\n        }\n        type\n        format\n        description\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        genres\n        averageScore\n        siteUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query MediaList(\n    $perPage: Int\n    $sort: [MediaSort]\n    $formatIn: [MediaFormat]\n    $genres: [String]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(sort: $sort, format_in: $formatIn, genre_in: $genres) {\n        id\n        popularity\n        title {\n          english\n        }\n        type\n        format\n        description\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        genres\n        averageScore\n        siteUrl\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;