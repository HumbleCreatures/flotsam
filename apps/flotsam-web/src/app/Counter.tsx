import { useState } from 'react';
import CountDisplay from './CountDisplay';
import CountControls from './CountControls';

const Counter = () => {
    const [ count, setCount ] = useState(0);

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);
    
        return (<>
        <CountDisplay count={count} />
        <div>
            <CountControls increaseCount={increaseCount} decreaseCount={decreaseCount} />
        </div>
    </>);
}

export default Counter;