import React from 'react'
import { Link } from 'react-router-dom';
import PropType from 'prop-types'
import { Image } from './Thumb.style'

const Thumb = ({ image, movieId, clickable }) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`} >
                <Image src={image} alt='movie-thumb'/>
            </Link>
        )
    :
    <Image src={image} alt='movie-thumb'/>
    }
    </div>
)

Thumb.prototype = {
    image: PropType.string,
    movieId: PropType.number,
    clickable: PropType.bool
}

export default Thumb;