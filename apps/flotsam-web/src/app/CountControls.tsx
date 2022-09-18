type CountControls = {
    increaseCount: () => void;
    decreaseCount: () => void;
}

const CountControls = ({increaseCount, decreaseCount}: CountControls) => (<>
    <button onClick={() => increaseCount()}>+1</button>
    <button onClick={() => decreaseCount()}>-1</button>
</>)
export default CountControls;