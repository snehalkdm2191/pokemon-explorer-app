import React, { useEffect, useState } from 'react';
import { fetchPokemonDetail } from '../services/api';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';
import styles from '../style/PokemonDetailPage.module.css';

const PokemonDetailPage: React.FC = () => {
    const { name } = useParams<{ name?: string }>();
    const [pokemon, setPokemon] = useState<any>(null);

    useEffect(() => {
        if (name) {
            fetchPokemonDetail(name).then(response => {
                setPokemon(response.data);
            });
        }
    }, [name]);

    if (!pokemon) return null;

    return (
        <Container className={styles.container}>
            <Typography variant="h2" gutterBottom className={styles.title}>
                {pokemon.name}
            </Typography>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
            <Typography variant="h5" gutterBottom className={styles.abilities}>
                Abilities
            </Typography>
            <List>
                {pokemon.abilities.map((ability: any) => (
                    <ListItem key={ability.ability.name}>
                        <ListItemText primary={ability.ability.name} />
                    </ListItem>
                ))}
            </List>
            <Button component={Link} to="/" variant="contained">
                Back to List
            </Button>
        </Container>
    );
};

export default PokemonDetailPage;
