import { useStateHook } from './useStateHook';

export default function App() {
  const [counter, setCounter] = useStateHook(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}
