import { useEffect, useState, useRef, memo, useCallback } from 'react'
import './App.css';

const CounterButton = ({ handler, count}: {
  handler: () => void,
  count: number
}) => {
  console.log("Rendu de CounterButton")
  // useEffect(() => {
  //   console.log("Rendu de CounterButton")
  // }, [])
  return (
    <button onClick={handler}>Increment {count}</button>
  )
}

const DummyTitle = (props: any) => {
  console.log("Render de Dummy title")
  return(
    <h1>Petit test de render</h1>
  )
}

const MemoizedDummyTitle = memo(DummyTitle)

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const calcul = () => {
    console.log("Calcul tres couteux")
  }
  const result = calcul()
  // const ref = useRef(0)
  // useEffect(() => {
  //   // Lors de la creation du composant car j'ai en dependance un tableau vide
  //   console.log("Creation du composant");
  //   return () => {
  //     console.log("Executee lors de la destruction du composant");
  //   }
  // }, [])
  // useEffect(() => {
  //   // Lors de la creation du composant mais egalement lors de toute mise a jour de count
  //   console.log("Creation - ou mise a jour de count - du composant");
  //   if (ref.current === 0) {
  //     console.log("Uniquement lors de la creation du composant");
  //   }
  //   if (ref.current > 0) {
  //     console.log("Uniquement lors de la mise a jour du composant");
  //   }
  //   ref.current += 1
  //   return () => {
  //     console.log("Executee lors de la destruction du composant - Count");
  //   }
  // }, [count])
  const handler = useCallback(() => setVisible(true), [])
  return (
    <section>
      {/* <button onClick={() => setCount((v: number) => (v + 1))}>Increment {count}</button>
       */}
      <CounterButton handler={() => setCount((v: number) => (v + 1))} count={count} />
      <MemoizedDummyTitle value={visible} handler={handler} />
    </section>
  );
}

export default App;
