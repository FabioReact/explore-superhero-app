import { useParams } from 'react-router-dom';
import HeroCard from '../components/HeroCard';
import Spinner from '../components/Spinner';
import { useGetHeroByIdQuery } from '../store/apiSlice';

const HeroDetails = () => {
  const { id } = useParams();
  const { isLoading, isError, data } = useGetHeroByIdQuery(id || '');

  return (
    <section>
      <h1>Details</h1>
      <div className="flex justify-center">
        {isLoading && <Spinner />}
        {isError && <p>Error while fetching</p>}
        {data && <HeroCard hero={data} />}
      </div>
    </section>
  );
};

export default HeroDetails;
