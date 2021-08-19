import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

export default function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment/decrement counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a
          className="quantity-minus"
          title="Decrement"
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity-input"
          value={myState}
        />
        <a
          className="quantity-plus"
          onClick={() => dispatch(incNumber(5))}
          title="Increment"
        >
          <span>+</span>
        </a>
      </div>
    </div>
  );
}
