import React, { useRef, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';

import { Container, MenuContainer, MenuItem, MenuLink, SearchContainer, SearchBar, FocusSearchBar } from './styles';

const Header: React.FC = () => {
    const [activeSearchButton, setActiveSearchButton] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchInputRef = useRef<HTMLInputElement>(null);

    const handleBlurSearchBar = () => {
        setActiveSearchButton(true);
    }
    
    const handleFocusSearchBar = () => {
        if (searchInputRef.current != null)
            searchInputRef.current.focus();
        
        setActiveSearchButton(false);
    }

    const handleSubmitSearch = (ev: React.FormEvent) => {
        ev.preventDefault();

        alert(`Your search was: ${searchTerm}`)
    }

    return (
        <Container>
            <MenuContainer>
                    <MenuItem>
                        <MenuLink to="/">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/characters">Characters</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/comics">Comics</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/stories">Stories</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/series">Series</MenuLink>
                    </MenuItem>
            </MenuContainer>
            <SearchContainer
                onSubmit={ev => handleSubmitSearch(ev)}
            >
                    <SearchBar
                        placeholder="Search for a character"
                        onChange={ev => setSearchTerm(ev.target.value)}
                        onBlur={handleBlurSearchBar}
                        ref={searchInputRef}
                    />
                    <FocusSearchBar
                        type="button"
                        active={activeSearchButton}
                        onClick={handleFocusSearchBar}
                    >
                        <BiSearchAlt size={30} color="#e23636" />
                    </FocusSearchBar>
            </SearchContainer>
        </Container>
    );
}

export default Header;