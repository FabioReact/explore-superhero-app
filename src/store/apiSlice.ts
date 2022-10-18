import { Hero } from './../types/hero';
// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'heroesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllHeroes: builder.query<Hero[], void>({
      query: () => '/heroes',
    }),
    getHeroById: builder.query<Hero, string>({
      query: (id) => `/heroes/${id}`,
    }),
    getHeroesByLetter: builder.query<Hero[], string>({
      query: (letter) => `heroes?name_like=^${letter}`,
    }),
    addHero: builder.mutation<Hero, Hero>({
      query: (hero) => ({
        url: 'heroes',
        method: 'POST',
        body: hero,
      }),
    }),
    removeHero: builder.mutation<Hero, string>({
      query: (id) => ({
        url: `heroes/${id}`,
        method: 'DELETE',
      })
    })
  }),
});

export const {
  useGetAllHeroesQuery,
  useGetHeroByIdQuery,
  useGetHeroesByLetterQuery,
  useLazyGetHeroesByLetterQuery,
	useAddHeroMutation,
  useRemoveHeroMutation,
} = apiSlice;
