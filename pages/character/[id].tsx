//inicializa el componente para mostrar un solo personaje
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getSingleCharacter } from '../../app/utils/endpoints';
import Image from 'next/image';
import { Character } from '@/app/typings/Api.interface';
import useIsMounted from '@/app/Hooks/useIsMounted';
export default function SingleCharacter() {
  const router = useRouter();
  const isMounted = useIsMounted();
  const { id } = router.query;
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    if (id) {
      getSingleCharacter({ id: Number(id) }).then((res) => {
        setCharacter(res);
        console.log(res, 'res');
      });
    }
  }, [id]);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      {character && (
        <div className='centered'>
          {character && (
            <div className='character-container'>
              <Image
                className='character-image'
                src={character.image}
                alt=''
                width={100}
                height={100}
              />
              <div className='character-info'>
                <h1>{character.name}</h1>
                <p>
                  <strong>Specie:</strong> {character.species}
                </p>
                <p>
                  <strong>Location:</strong> {character.origin.name}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
