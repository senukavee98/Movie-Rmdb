import React from 'react'
import PropType from 'prop-types'
import { calcTime, convertMoney} from '../../helpers'
import { Wrapper, Content } from './MovieInfoBar.style'

const MovieInfoBar = ( { time, budget, revenue } ) => (
    <Wrapper>
        <Content>
            <div  className='column' >
                <p> Running Time: {calcTime(time)} </p>
            </div>
            <div  className='column' >
                <p> Budget: {convertMoney(budget)} </p>
            </div>
            <div  className='column' >
                <p> Revenue: ${revenue} </p>
            </div>
        </Content>
    </Wrapper>
)

MovieInfoBar.prototype = {
    time: PropType.number,
    budget: PropType.number,
    revenue: PropType.number
}

export default MovieInfoBar;
