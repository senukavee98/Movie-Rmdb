import React from 'react'
import PropType from 'prop-types'
import { Wrapper } from './Button.style'

const Button = ( { text, callback }) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
)

Button.prototype = {
    text: PropType.string,
    callback: PropType.func
}

export default Button;