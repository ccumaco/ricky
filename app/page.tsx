/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { getCharacters } from './utils/endpoints';
import { Character } from './typings/Api.interface';
import {
  Avatar,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CardMedia from './components/CardMedia';
import { SpeciesTypes } from './typings/MagicStrings';
import { useEffect, useState } from 'react';
export default function Home() {
  const [species, setSpecies] = useState('Human');
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    getCharacters({ species }).then((res) => {
      setCharacters(res);
    });
  }, [species]);

  const handleChange = (event: SelectChangeEvent) => {
    setSpecies(event.target.value as string);
  };
  return (
    <div className='centered'>
      <div className='header'>Holiwis</div>
      <FormControl fullWidth>
        <InputLabel className='label-style' id='demo-simple-select-label'>
          Age
        </InputLabel>
        <Select
          className='select-style'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={species}
          label={species}
          onChange={handleChange}
        >
          {Object.values(SpeciesTypes).map((species) => (
            <MenuItem key={species} value={species}>
              {species}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid
        maxWidth={1200}
        container
        columnSpacing={2}
        rowSpacing={2}
        className='centered'
      >
        {characters &&
          characters
            .filter((character: Character) => character.species === species)
            .map((character: Character) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={character.id}>
                <CardMedia character={character} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}
