import { useSelector, useDispatch } from 'react-redux';
import { SET_COUNT } from '@/store/reducers/count/action';
import typeStore from '@/store/type';

function IndexPage() {
  const { counter } = useSelector((state: typeStore) => state.count);
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({
      type: SET_COUNT,
      payload: {
        counter: counter + 1,
      },
    });
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1>Vite + React</h1>
      <div className="card mt-[8px] ">
        <button
          className="rounded-lg border-2 px-4"
          onClick={() => onClickIncrement()}
        >
          count is {counter}
        </button>
        <p className="mt-[20px]">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-1xl mt-[4px] font-bold  text-color-primary underline">
        ENV : {import.meta.env.VITE_STATUS_PROJECT}
      </p>
      <br />
    </div>
  );
}

export default IndexPage;
