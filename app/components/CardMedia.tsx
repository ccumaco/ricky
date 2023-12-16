import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Character } from '../typings/Api.interface';
import Link from 'next/link';

export default function MediaCard({ character }: { character: Character }) {
  const { name, species, id, origin, image } = character;
  return (
    <Link href={`/character/${id}`}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={image} title={name} />
        <CardContent className=''>
          <Typography
            className='overflow-text'
            title={name}
            gutterBottom
            variant='h5'
            component='div'
          >
            {name}
          </Typography>
          <Typography title={species} variant='body2' color='text.secondary'>
            <strong>Specie:</strong> {species}
          </Typography>
          <Typography
            className='overflow-text'
            title={origin?.name ?? 'Unknown'}
            variant='body2'
            color='text.secondary'
          >
            <strong>Location:</strong> {origin?.name ?? 'Unknown'}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
