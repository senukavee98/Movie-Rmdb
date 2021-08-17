import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import { Wrapper, Content } from './BreadCrumb.style'

const BreadCrumb = ( {movieTitle} ) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span> Home </span>
            </Link>
            <span> | </span>
            <span> {movieTitle} </span>

        </Content>
    </Wrapper>
)

BreadCrumb.proptype = {
    movieTitle: PropType.string
}

export default BreadCrumb;