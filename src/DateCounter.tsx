import { useReducer } from "react";

const reducer = (state: any, action: any) => {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };
    case "inc":
      return { ...state, count: state.count + 1 };
    case "setCount":
      return { ...state, count: action.payload };
    default:
      throw new Error("Unknown action!");
  }
};

export default function DateCounter() {
  // NOTE: instead of using useState, we use useReducer here, that's why i commented the above useState out!
  // const [count, setCount] = useState(0);
  // const [count, dispatch] = useReducer(reducer, 0);

  // NOTE: instead of using useState, we use useReducer here, that's why i commented the above useState out!
  // const [step, setStep] = useState(1);
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;
  // const [count, dispatch] = useReducer(reducer, initialState);
  // const [step, dispatch] = useReducer(reducer, 0);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // dispatch(-1);
    // dispatch({ type: "dec", payload: -1 });
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // dispatch(1);
    // dispatch({ type: "inc", payload: 1 });
    dispatch({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e: { target: { value: any } }) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e: { target: { value: any } }) {
    // setStep(Number(e.target.value));
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
