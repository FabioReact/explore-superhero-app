type CreateHeroProps = {
  name: string;
  fullname: string;
  intelligence: number;
};

export const createHero = ({
  name,
  fullname,
  intelligence,
}: CreateHeroProps) => {
  return {
    name, // équivalent à name: name
    powerstats: {
      intelligence,
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: '',
    },
    biography: {
      'full-name': fullname,
      'alter-egos': '',
      aliases: '',
      'place-of-birth': '',
      'first-appearance': '',
      publisher: '',
      alignment: '',
    },
    appearance: {
      gender: '',
      race: '',
      height: '',
      weight: '',
      'eye-color': '',
      'hair-color': '',
    },
    work: {
      occupation: '',
      base: '',
    },
    connections: {
      'group-affiliation': '',
      relatives: '',
    },
    image: {
      url: '',
    },
  };
};
