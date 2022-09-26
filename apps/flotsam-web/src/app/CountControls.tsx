import { useAppDispatch } from './store/hooks';
import { increaseCount, decreaseCount, increaseByAmount } from './store/reducers/counterSlice';

const CountControls = () => {
    const dispatch = useAppDispatch();
    return <>
        <button onClick={() => dispatch(increaseCount())}>+1</button>
        <button onClick={() => dispatch(decreaseCount())}>-1</button>
        <button onClick={() => dispatch(increaseByAmount(5))}>+5</button>
        <button onClick={() => dispatch(increaseByAmount(-5))}>-5</button>
    </>
}
export default CountControls;