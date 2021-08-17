import React from 'react'
import { Wrapper, Content, Text } from './MovieInfo.style'
import PropType from 'prop-types'

import Thumb from '../Thumb/index'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config'
import noImage from '../../images/no_image.jpg'

const MovieInfo = ({ movie }) => (
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb 
                image = {
                    movie.poster_path
                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                    : noImage
                }
                clickable
                alt='movie-thumb'
            />
            <Text>
                <h1> {movie.title} </h1>
                <h3> PLOT </h3>
                <p> {movie.overview} </p>

                <div className='rating-directors'>
                    <div>
                        <h3> RATING </h3>
                        <div className='score'> {movie.vote_average} </div>
                    </div>
                    <div className='directors'>
                        <h3> DIRECTOR {movie.directors.length > 1 ? 's' : '' }</h3>
                        {
                            movie.directors.map(dir => (
                                <p key={dir.credit_id}> {dir.name} </p>
                            ))
                        }
                    </div>
                </div>
            </Text>
        </Content>

    </Wrapper>
);


MovieInfo.prototype = {
    movie: PropType.object
}

export default MovieInfo;