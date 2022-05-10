import { useReducer } from 'react'
import { Hero } from '../types/hero'

type ReducerState = {
  heroes: Hero[];
  loading: boolean;
  error: string | null;
};

enum ActionNames {
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_HEROES = 'SET_HEROES',
}

type Action =
  | {
      type: ActionNames.SET_ERROR;
      error: string;
    }
  | {
      type: ActionNames.SET_HEROES;
      heroes: Hero[];
    }
  | {
      type: ActionNames.SET_LOADING;
    };

const reducer = (state: ReducerState, action: Action) => {
  switch (action.type) {
    case ActionNames.SET_LOADING:
      return {
        loading: true,
        heroes: [],
        error: null,
      };
    case ActionNames.SET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case ActionNames.SET_HEROES:
      return {
        ...state,
        loading: false,
        heroes: action.heroes,
      };
    default:
      throw new Error('Not a valid Action Type');
  }
};

const useSearchHeroes = () => {
	const initialState: ReducerState = {
    heroes: [],
    loading: false,
    error: null,
  };

	const onSearchHeroes = async (heroName: string|undefined) => {
    dispatch({ type: ActionNames.SET_LOADING });
    try {
      const response = await fetch(
        `http://localhost:4000/heroes?name_like=${heroName}`,
      );
      const result = await response.json();
      dispatch({
        type: ActionNames.SET_HEROES,
        heroes: result,
      });
    } catch (error) {
      dispatch({
        type: ActionNames.SET_ERROR,
        error: 'Houston, on a un probleme!',
      });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

	return {
		...state,
		onSearchHeroes
	}
}

export default useSearchHeroes