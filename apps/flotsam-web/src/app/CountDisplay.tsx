import { useAppSelector } from './store/hooks';

const CountDisplay = () => {
    const count = useAppSelector((state) => state.counter.value);

    return <div>Count: {count}</div>
};

export default CountDisplay;