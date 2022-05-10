import { useRef, useState } from 'react';
import type { Hero } from '../types/hero';

const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>(null);
  // #region es5
  // const onSubmitHandler = (event: React.SyntheticEvent) => {
  // 	event.preventDefault() // Empeche le rafraichissement de la page
  // 	const hero = inputRef.current?.value
  // 	fetch(`http://localhost:4000/heroes?name_like=${hero}`)
  // 		.then(response => response.json())
  // 		.then(results => {
  // 			console.log(results)
  // 		})
  // 		.catch((error) => {
  // 			console.error(error)
  // 		})
  // }
  // #endregion es5

  // #region async
  const onSubmitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault(); // Empeche le rafraichissement de la page
    setLoading(true);
    setError(null);
    const hero = inputRef.current?.value;
    try {
      const response = await fetch(
        `http://localhost:4000/heroes?name_like=${hero}`,
      );
      const result = await response.json();
      setHeroes(result);
    } catch (error) {
      console.error(error);
      setError('Houston, on a un probleme!');
    }
    setLoading(false);
  };
  // #endregion async

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="heroName">Name</label>
        <input ref={inputRef} type="text" />
        <button>Search</button>
      </form>
      <section>
				{error && <p style={{color: "red"}}>{error}</p> }
        {loading && <div>Loading...</div>}
        {heroes.map((hero) => (
          <div key={hero.id}>
            <p>
              {hero.name} <span>#{hero.id}</span>
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default SearchPage;
