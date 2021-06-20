import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: #e23636;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.7);
    margin-bottom: 15px;
    padding: 0 6rem;
    height: 80px;
`;

export const MenuContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`;

export const MenuItem = styled.li`
    position: relative;
    padding: 0.2rem 1rem;
    z-index: 1;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        height: 40%;
        width: 0%;
        z-index: -1;
        transition: width 0.3s ease-in, height 0.2s ease-out 0.3s;
    }
    & + li {
        margin-left: min(4vw, 4rem);
    }
    &:hover {
        &::before {
            height: 100%;
            width: 100%;
        }
        > a {
            color: #e23636;
        }
    }
`;

export const MenuLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.5s ease-in-out 0.1s;
`;

export const SearchContainer = styled.form`
    position: relative;
    min-width: 220px;
    width: 10vw;
`;

export const SearchBar = styled.input`
    display: block;
    position: relative;
    right: 0;
    color: #e23636;
    font-size: 1.2rem;
    font-family: 'Play', sans-serif;
    text-indent: 1rem;
    border-radius: 40px;
    box-shadow: inset 0 0 6px rgba(226, 54, 54, 1);
    height: 40px;
    width: 100%;
    transition: 0.5s ease-in-out;
    clip-path: inset(0 0 0 100%);
    &:focus {
        outline: none;
        clip-path: inset(0 0 0 0);
    }
`;

export const FocusSearchBar = styled.button<{ active: boolean; }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #fff;
    border-radius: 50%;
    opacity: ${props => props.active ? 1 : 0};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:active {
        outline: none;
        box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.6);
    }
`;