/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query Genres {\n    GenreCollection\n  }\n": types.GenresDocument,
    "\n  query Page(\n    $perPage: Int\n    $formatIn: [MediaFormat]\n    $genreIn: [String]\n    $sort: [MediaSort]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(format_in: $formatIn, genre_in: $genreIn, sort: $sort) {\n        id\n        title {\n          english\n        }\n        type\n        format\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        averageScore\n        popularity\n        siteUrl\n      }\n    }\n  }\n": types.PageDocument,
};

export function graphql(source: "\n  query Genres {\n    GenreCollection\n  }\n"): (typeof documents)["\n  query Genres {\n    GenreCollection\n  }\n"];
export function graphql(source: "\n  query Page(\n    $perPage: Int\n    $formatIn: [MediaFormat]\n    $genreIn: [String]\n    $sort: [MediaSort]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(format_in: $formatIn, genre_in: $genreIn, sort: $sort) {\n        id\n        title {\n          english\n        }\n        type\n        format\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        averageScore\n        popularity\n        siteUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query Page(\n    $perPage: Int\n    $formatIn: [MediaFormat]\n    $genreIn: [String]\n    $sort: [MediaSort]\n  ) {\n    Page(perPage: $perPage) {\n      pageInfo {\n        total\n        perPage\n        currentPage\n        lastPage\n        hasNextPage\n      }\n      media(format_in: $formatIn, genre_in: $genreIn, sort: $sort) {\n        id\n        title {\n          english\n        }\n        type\n        format\n        episodes\n        chapters\n        volumes\n        coverImage {\n          large\n        }\n        bannerImage\n        averageScore\n        popularity\n        siteUrl\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;