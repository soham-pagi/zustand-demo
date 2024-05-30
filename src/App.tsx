import { useCounterStore } from "./stores/counterStore";

const buttonStyles =
  "mx-2 my-5 bg-zinc-700  text-zinc-200 px-4 py-2 rounded-lg hover:bg-zinc-600 active:bg-zinc-800 hover:scale-[103%]";

const red = "!bg-red-500 !hover:bg-red-600 !active:bg-red-700";

export default function App() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <main className="bg-[url('/public/bear.jpg')] bg-cover bg-no-repeat bg-center min-w-52 min-h-dvh bg-zinc-300 flex justify-center items-center select-none">
      <section className="text-center bg-green-500 p-4 rounded-lg shadow-2xl">
        <h1 className="font-thin text-5xl p-2">Counter</h1>
        <p className="font-semibold text-5xl">{count}</p>

        <button className={buttonStyles} onMouseDown={increment}>
          Add
        </button>
        <button className={buttonStyles} onMouseDown={decrement}>
          Sub
        </button>
        <button className={`${buttonStyles} ${red}`} onClick={reset}>
          reset
        </button>
      </section>
    </main>
  );
}
