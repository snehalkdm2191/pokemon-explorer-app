import React, { useEffect, useState } from 'react';
import { fetchPokemonList } from '../services/api';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography, Button, Pagination as MuiPagination } from '@mui/material';
import styles from '../style/PokemonListPage.module.css';

interface Pokemon {
  name: string;
}

const PokemonListPage: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetchPokemonList((page - 1) * 20, 20);
        setPokemonList(response.data.results);
        setCount(Math.ceil(response.data.count / 20));
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemons();
  }, [page]);

  return (
    <Container className={styles.container}>
      <Typography variant="h2" gutterBottom className={styles.title}>
        Pokemon List
      </Typography>
      <Grid container spacing={3}>
        {pokemonList.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name} className={styles.gridItem}>
            <Button 
              component={Link} 
              to={`/pokemon/${pokemon.name}`} 
              variant="contained" 
              className={styles.pokemonButton}
            >
              {pokemon.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <MuiPagination 
        className={styles.pagination} 
        count={count} 
        page={page} 
        onChange={(event, value) => setPage(value)} 
      />
    </Container>
  );
};

export default PokemonListPage;
