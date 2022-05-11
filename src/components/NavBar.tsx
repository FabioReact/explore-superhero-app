import { useState } from 'react';

type Props = {
  link: string;
  selected: boolean;
  handler: () => void;
};

const NavBarItem = ({ link, selected = false, handler }: Props) => {
  return (
    <li onClick={handler} style={selected ? { fontWeight: 700 } : {}} className={selected ? "font-bold" : undefined}>
      {link}
    </li>
  );
}

const NavBar = () => {
  const [selected, setSelected] = useState('home');
  const arrayOfLinks = ['home', 'battle', 'search', 'profil'];
  return (
    <nav>
      <ul className='navClass'>
        {/* {arrayOfLinks.map((link) => (
          <li
            onClick={() => setSelected(link)}
            style={selected === link ? { fontWeight: 700 } : {}}
          >
            {link}
          </li>
        ))} */}
        {arrayOfLinks.map((link) => (
          <NavBarItem key={link} link={link} selected={selected === link} handler={() => setSelected(link)} />
        ))}
        {/* <li
          onClick={() => setSelected('battle')}
          style={selected === 'battle' ? { fontWeight: 700 } : {}}
        >
          Battle
        </li>
        <li
          onClick={() => setSelected('Search')}
          style={selected === 'Search' ? { fontWeight: 700 } : {}}
        >
          Search
        </li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
