import { useState } from 'react';
import CountDisplay from './CountDisplay';
import CountControls from './CountControls';

const Counter = () => {

        return (<>
        <CountDisplay />
        <div>
            <CountControls />
        </div>
    </>);
}

export default Counter;