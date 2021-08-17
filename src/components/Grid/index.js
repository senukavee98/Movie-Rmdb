import React from 'react'
import PropType from 'prop-types'
import { Wrapper, Content } from './Grid.style'


const Grid = ({ header, children }) => (
    <Wrapper>
        <h1> {header} </h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
)

Grid.prototype = {
    header: PropType.string,
}

export default Grid;