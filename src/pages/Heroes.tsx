import { useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import Spinner from '../components/Spinner';
import { useLazyGetHeroesByLetterQuery } from '../store/apiSlice';

const createArrayOfLetters = () => {
  const arrayOfLetters = []
  for (let index = 65; index <= 90; index++) {
    arrayOfLetters.push(String.fromCharCode(index))
  }
  return arrayOfLetters
}

const Heroes = () => {
  const [getHeroesByLetter, { data, isError, error, isLoading, isFetching }] =
    useLazyGetHeroesByLetterQuery();

  useEffect(() => {
    getHeroesByLetter('A');
  }, []);

  const arrayOfLetters = createArrayOfLetters();

  const onSelectLetter = (letter: string) => {
    getHeroesByLetter(letter);
  };

  return (
    <section>
      <h1>Heroes</h1>
      <ul className='flex justify-center gap-1'>
        {arrayOfLetters.map((letter) => (
          <li key={letter}>
            <button onClick={() => onSelectLetter(letter)}>{letter}</button>
          </li>
        ))}
      </ul>
      {(isLoading || isFetching) && <Spinner />}
      {isError && <p>Error while fetching: {error?.toString()}</p>}
      {data && !(isLoading || isFetching) && (
        <div className="flex flex-wrap justify-center gap-4">
          {data.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Heroes;
