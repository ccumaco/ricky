import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useIsMounted = () => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      setLoaded(true);
    }
  }, [router.isReady]);

  // Devuelve el estado de montaje
  return loaded;
};

export default useIsMounted;
