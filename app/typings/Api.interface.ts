export interface Character {
  name: string;
  image: string;
  url: string;
  id: number;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: string;
}
