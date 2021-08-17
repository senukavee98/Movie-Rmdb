import React, { useEffect, useRef, useState } from 'react'
import PropType from 'prop-types'
import { Wrapper, Content } from './SearchBar.style'
import searchIcon from '../../images/search-icon.svg'

const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)

    }, [setSearchTerm,state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input
                    type='text'
                    placeholder='Search Movie'
                    onChange={e => setState(e.currentTarget.value)}
                    value={state}
                />

            </Content>
        </Wrapper>
    )
}

SearchBar.prototype = {
    setSearchTerm: PropType.func
}

 export default SearchBar;