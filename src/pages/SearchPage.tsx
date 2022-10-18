import { useEffect, useRef } from 'react';
import type { Hero } from '../types/hero';
import useSearchHeroes from '../hooks/useSearchHeroes';
import { useRemoveHeroMutation } from '../store/apiSlice';

// Chargement, l'erreur, setheroes

const SearchPage = () => {
  const [deleteHero, { data }] = useRemoveHeroMutation();

  useEffect(() => {
    if (data) {
      onSearchHeroes(inputRef.current?.value);
    }
  }, [data]);

  const inputRef = useRef<HTMLInputElement>(null);
  const { heroes, error, loading, onSearchHeroes } = useSearchHeroes();
  // #region async
  const onSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault(); // Empeche le rafraichissement de la page
    const hero = inputRef.current?.value;
    onSearchHeroes(hero);
  };
  // #endregion async

  const onDeleteHanler = (id: string) => {
    deleteHero(id);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="heroName">Name</label>
        <input ref={inputRef} type="text" />
        <button>Search</button>
      </form>
      <section>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading && <div>Loading...</div>}
        {heroes.map((hero: Hero) => (
          <div key={hero.id}>
            <p>
              {hero.name} <span>#{hero.id}</span>
              <button onClick={() => onDeleteHanler(hero.id)}>Delete</button>
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default SearchPage;
