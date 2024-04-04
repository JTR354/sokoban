import "./App.css";
import { useStore } from "./hooks";

function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <button className="bg-sky-700 via-red-500" onClick={increasePopulation}>
      one up
    </button>
  );
}

const App = () => {
  return (
    <div className="content">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h2 className="select-none bg-slate-400 text-right">h2</h2>
      <h1>Rsbuild with React hello world</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <BearCounter />
      <Controls />
    </div>
  );
};

export default App;
