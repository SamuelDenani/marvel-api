import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';

import api from '../../services/api';

import { Container } from './styles';

interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const loadCharacters = async () => {
            
            const response = await api.get('/v1/public/characters');

            setCharacters(response.data.data.results);
        }

        loadCharacters();
    }, []);

    return (
        <Container>
            <Header />
            <Container>
                {
                    characters.map((char: Character) => (
                        <article key={char.id}>
                            <img src={`${char.thumbnail.path}/portrait_medium.${char.thumbnail.extension}`} alt={char.name} />
                            <h2>{char.name}</h2>
                            <p>{char.description || 'Decription not available'}</p>
                        </article>
                    ))
                }
            </Container>
        </Container>
    );
}

export default Characters;