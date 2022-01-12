import axios from "axios";
import { Container, Grid } from "@material-ui/core";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { MovieCard } from "../src/Components/Atoms/Card/index";
import { IMovie } from "../src/tmdb/interfaces";
import { SearchBar } from "../src/Components/Atoms/SearchBar/index";
import { imageUrl, movieUrl, moviesUrl, searchUrl } from "../src/tmdb/constant";

const Home: NextPage = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const url =
      query.length === 0
        ? `${moviesUrl}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        : `${searchUrl}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}`;

    const delayDebounceFn = setTimeout(() => {
      axios.get<Record<"results", IMovie[]>>(url).then(response => {
        console.log(response);
        setMovies(response.data.results);
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <Container>
      <SearchBar handleChange={e => setQuery(e.currentTarget.value)} />
      <Grid container spacing={2}>
        {movies.map(movie => {
          return (
            <Grid item xs={4}>
              <MovieCard
                key={movie.id}
                title={movie.title}
                url={`${movieUrl}/${movie.id}`}
                imageUrl={`${imageUrl}${movie.poster_path}`}
                description={movie.overview}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
