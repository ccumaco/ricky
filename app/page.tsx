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
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import CardMedia from './components/CardMedia';
import { SpeciesTypes } from './typings/MagicStrings';
import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Home() {
  const [species, setSpecies] = useState('Human');
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [info, setInfo] = useState<any>(null);
  useEffect(() => {
    console.log('cualquier cosa2');
    setPage(1);
  }, [species]);
  useEffect(() => {
    console.log('cualquier cosa');

    getCharacters({ species, page }).then((res) => {
      setCharacters(res.characters);
      setInfo(res.info);
    });
  }, [species, page]);

  const handleChange = (event: SelectChangeEvent) => {
    setSpecies(event.target.value as string);
  };
  return (
    <div className='centered'>
      <div className='header'>
        <Image
          src='/rick-logo.png'
          alt='rick and morty'
          width={200}
          height={100}
          objectFit='contain'
        />
      </div>
      <FormControl fullWidth>
        <InputLabel className='label-style' id='demo-simple-select-label'>
          Species
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
      <Pagination
        className='pagination'
        count={Math.ceil((info?.count ?? 1) / 20)}
        color='secondary'
        page={page}
        onChange={(event, page) => setPage(page)}
      />
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
