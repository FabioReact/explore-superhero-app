import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context/login-context'

type Props = {
  link: string;
  selected: boolean;
  path: string;
  handler: () => void;
};

const NavBarItem = ({ link, selected = false, path, handler }: Props) => {
  return (
    <li
      onClick={handler}
      style={selected ? { fontWeight: 700 } : {}}
      className={selected ? 'font-bold' : undefined}
    >
      <Link to={path}>{link}</Link>
    </li>
  );
};

const NavBar = () => {
  const [selected, setSelected] = useState('home');
  const loginContext = useContext(LoginContext)
  const arrayOfLinks = [
    { link: 'home', path: '/' },
    { link: 'battle', path: 'battle' },
    { link: 'heroes', path: 'heroes' },
    { link: 'search', path: 'search' },
    { link: 'profil', path: 'profil' },
    { link: 'ReduxCounter', path: 'counter' },
    { link: 'login', path: 'login' },
    // { link: 'logout', path: 'logout' },
  ];
  return (
    <nav>
      <ul className="navClass">
        {arrayOfLinks.map((linkObject) => (
          <NavBarItem
            key={linkObject.link}
            link={linkObject.link}
            path={linkObject.path}
            selected={selected === linkObject.link}
            handler={() => setSelected(linkObject.link)}
          />
        ))}
        {loginContext.connected && <button onClick={loginContext.logout}>Logout</button> }
      </ul>
    </nav>
  );
};

export default NavBar;
