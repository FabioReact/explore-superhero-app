import { useEffect, useState, useRef } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage'
import SearchPage from './pages/SearchPage'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef(0)
  useEffect(() => {
    // Lors de la creation du composant car j'ai en dependance un tableau vide
    console.log("Creation du composant");
    return () => {
      console.log("Executee lors de la destruction du composant");
    }
  }, [])
  useEffect(() => {
    // Lors de la creation du composant mais egalement lors de toute mise a jour de count
    console.log("Creation - ou mise a jour de count - du composant");
    if (ref.current === 0) {
      console.log("Uniquement lors de la creation du composant");
    }
    if (ref.current > 0) {
      console.log("Uniquement lors de la mise a jour du composant");
    }
    ref.current += 1
    return () => {
      console.log("Executee lors de la destruction du composant - Count");
    }
  }, [count])
  return (
    <section>
      <NavBar />
      <SearchPage />
      <button onClick={() => setCount((v: number) => (v + 1))}>Increment {count}</button>
      <LoginPage />
    </section>
  );
}

export default App;
