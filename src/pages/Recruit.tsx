import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAddHeroMutation } from '../store/apiSlice';
import { Hero } from '../types/hero';
import { createHero } from '../utils/createHero';

type Inputs = {
  name: string;
  fullname: string;
  intelligence: number;
};

const Recruit = () => {
  // Navigation
  const navigate = useNavigate();

  // Mutation - Add hero to backend
  const [addHero, { data, isError, isLoading, error }] = useAddHeroMutation();

  useEffect(() => {
    if (data) {
      navigate(`/heroes/${data.id}`);
    }
  }, [data]);

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmitHandler: SubmitHandler<Inputs> = async (data) => {
    const hero = createHero(data);
    addHero(hero as unknown as Hero);
  };
  return (
    <section>
      <h1>Recruit</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: true,
              minLength: 2,
              maxLength: 30,
            })}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="fullname">Real Name</label>
          <input
            type="text"
            id="fullname"
            {...register('fullname', {
              required: true,
            })}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="intelligence">Intelligence</label>
          <input
            type="range"
            id="intelligence"
            {...register('intelligence', {
              required: true,
              min: 0,
              max: 100,
            })}
          />
        </fieldset>
        <button disabled={isLoading}>{isLoading ? 'Adding...' : 'Save'}</button>
      </form>
			{isError && <p>Error: {JSON.stringify(error)};
			</p> }
    </section>
  );
};

export default Recruit;
