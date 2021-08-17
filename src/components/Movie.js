import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../hooks/useMovieFetch";

import noImage from "../images/no_image.jpg";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import Spinner from "./Spinner/index";
import MovieInfoBar from "./MovieInfoBar/index";
import Grid from './Grid/index';
import Actor from "./Actor";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div> Something Went Wrong... </div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Grid header='Actors'>
        {
          movie?.actors?.map(actor => (
            <Actor 
              key={actor.credit_id}
              name={actor.name}
              character={actor.character}
              imageUrl={
                actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
              }
            />

          ))
        }
      </Grid>
    </>
  );
};

export default Movie;
