import React from 'react';
import Header from '../../components/Header';

import { Container, Heading } from './styles';

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Container>
                <Heading>Experience: Marvel API</Heading>
            </Container>
        </>
    );
}

export default Home;