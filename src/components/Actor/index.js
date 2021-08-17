import React from 'react'
import PropType from 'prop-types'
import { Wrapper, Image } from './Actor.style'

const Actor = ( { name, character, imageUrl }) => (
    <Wrapper>
        <Image src={imageUrl} alt='actor-thumb'/>
        <h3> {name} </h3>
        <p> {character} </p>
    </Wrapper>
)

Actor.prototype = {
    name : PropType.string,
    character: PropType.string,
    imageUrl: PropType.string
}

export default Actor;